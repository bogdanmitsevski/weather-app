import { IsNotEmpty } from "class-validator"

 export class FetchWeatherDTO {
    @IsNotEmpty({ message: 'lat should not be empty' })
    readonly lat: number
    @IsNotEmpty({ message: 'lon should not be empty' })
    readonly lon: number
    @IsNotEmpty({ message: 'part should not be empty' })
    readonly part: string
 }