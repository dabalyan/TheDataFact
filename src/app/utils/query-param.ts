import {QueryParamsHandling, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {getCurrentRoute, isNumber} from './functions';
import {AppInjector} from '../app.module';

export function QueryParam(
  defaultValue: string | number,
  validValues?: Array<string | number> | { min: number; max: number },
  parser: 'string' | 'number' = 'string',
  replaceUrl: boolean = true,
  queryParamsHandling: QueryParamsHandling = 'merge'
): PropertyDecorator {
  return function (target, propertyKey) {
    let value: string | number;
    let subscription: Subscription;
    let router: Router;

    const ngOnInitUnpatched = target['ngOnInit'];
    const ngOnDestroyUnpatched = target['ngOnDestroy'];

    target['ngOnInit'] = function () {
      router = AppInjector.get(Router);
      const activatedRoute = getCurrentRoute(router);

      subscription = activatedRoute
        .queryParams
        .subscribe((params) => {
          value = params[propertyKey as string];

          if (parser === 'number') {
            value = Number(value);
            value = isNumber(value) ? value : defaultValue;
          }

          if (validValues instanceof Array) {
            value = !validValues.length || validValues.includes(value) ? value : defaultValue;
          }
          else {
            value = value >= validValues.min && value <= validValues.max ? value : defaultValue;
          }
        });
      return ngOnInitUnpatched?.call(this);
    };

    target['ngOnDestroy'] = function () {
      subscription?.unsubscribe();
      return ngOnDestroyUnpatched?.call(this);
    };

    Object.defineProperty(target, propertyKey, {
      enumerable: false,
      configurable: false,

      get() {
        return value;
      },
      set(v: any) {
        value = v;
        router?.navigate(
          [],
          {
            replaceUrl,
            queryParams: {[propertyKey]: v},
            queryParamsHandling: queryParamsHandling
          });
      }
    });
  };
}
