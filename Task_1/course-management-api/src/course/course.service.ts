import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    getAllCourses(): string {
        return `Get all courses - from service`;
    }

    getCourseById(id: string): string {
        return `Get all course with id : ${id} from service`;
    }
    createCourse(): string {
        return `Create course - from service`;
    }
    updateCourse(id: string): string{
        return `update course with id : ${id}- from service`
    }
    patchCourse(id: string): string{
        return `update partial course with id : ${id}- from service`
    }
     deleteCourse(id: string): string{
        return `delete  course with id : ${id}- from service`
    }
}

