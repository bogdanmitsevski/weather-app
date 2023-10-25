import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseFormatterInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        if (data !== null) {
          return {
            sunrise: data.sunrise,
            sunset: data.sunset,
            temp: data.temp,
            feels_like: data.feels_like,
            pressure: data.pressure,
            humidity: data.humidity,
            uvi: data.uvi,
            wind_speed: data.wind_speed,
          }
        }
        else {
          return { data: data, status: 'Please check your params' }
        }
      }),
    );
  }
}
