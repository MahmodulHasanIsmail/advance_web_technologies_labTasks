import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
    getAllCourses(): string {
        return `Get all courses - from service`;
    }

    getCourseById(id: string): string {
        return `Get all course with id : ${id} from service`;
    }
    createCourse(createCourseDto: CreateCourseDto){
        return {
            message: `Course created successfully`,
            data: createCourseDto
        };
    }
    updateCourse(id: string, updateCourseDto: UpdateCourseDto){
        return {
            message: `Course ${id}updated successfully`,
            data: { id, ...updateCourseDto }
        };
    }
    patchCourse(id: string , updateCourseDto: UpdateCourseDto){
        return {
             message: `Course ${id} partially updated successfully`,
             updateCourse: updateCourseDto 
            };
    }
     deleteCourse(id: string): string{
        return `delete  course with id : ${id}- from service`
    }
}

