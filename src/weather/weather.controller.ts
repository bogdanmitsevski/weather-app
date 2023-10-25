import { Body, Controller, Get, HttpCode, HttpStatus, Post, Query, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { FetchWeatherDTO } from './dto/fetch-weather.dto';
import { WeatherService } from './weather.service';
import { ResponseFormatterInterceptor } from 'src/response-formatter/response-formatter.interceptor';

@Controller('api')
export class WeatherController {

    constructor(private readonly weatherService: WeatherService) {

    }

    @Get('get')
    @UseInterceptors(ResponseFormatterInterceptor)
    @HttpCode(HttpStatus.CREATED)
    @UsePipes(new ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true }))
    async getSpecificData(@Query() query: FetchWeatherDTO) {
        return await this.weatherService.getData(query);

    }

    @Post('fetch')
    @HttpCode(HttpStatus.CREATED)
    @UsePipes(new ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true }))
    fetchData(@Body() body: FetchWeatherDTO) {
        return this.weatherService.fetchData(body)
    }
}
