import { Type } from 'class-transformer';
import { IsInt,IsNotEmpty, IsString, IsOptional ,Max,Min } from 'class-validator';

export class CreateCourseDto {
    @IsString()
    @IsNotEmpty()
    name! : string;

    @IsString()
    @IsNotEmpty()
    courseCode! : string;

    @IsString()
    @IsNotEmpty()
    instructor! : string;

    @Type(() => Number)
    @IsInt()
    @Min(1)
    @Max(6)
    credits! : number;

    @IsString()
    @IsOptional()
    description? : string;
}