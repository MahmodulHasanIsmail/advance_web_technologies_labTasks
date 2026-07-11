import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    getAllCourses(): string {
        return `Get all courses - from service`
    }

    getCourseById(id: string): string {
        return `Get all course with id : ${id} from service`
    }
}

