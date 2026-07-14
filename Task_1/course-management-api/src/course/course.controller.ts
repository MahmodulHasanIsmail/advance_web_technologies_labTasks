import { Controller, Get, Param, Post, Put, Patch, Delete, Body ,UseInterceptors ,UploadedFile} from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService) {

    }

    @Get()
    getAllCourses() {
        return this.courseService.getAllCourses();
    }

    @Get(':id')
    getCourseById(@Param('id') id: string) {
        return this.courseService.getCourseById(id);
    }
    @Post()
    createCourse(@Body() createCourseDto: CreateCourseDto) {
        return this.courseService.createCourse(createCourseDto);
    }
    @Put(':id')
    updateCourse(
        @Param('id') id: string,
        @Body() updateCourseDto: UpdateCourseDto) {
        return this.courseService.updateCourse(id, updateCourseDto);
    }
    @Patch(':id')
    patchCourse(
        @Param('id') id: string,
    @Body() updateCourseDto: UpdateCourseDto) {
        return this.courseService.patchCourse(id, updateCourseDto);
    }
    @Delete(':id')
    deleteCourse(@Param('id') id: string) {
        return this.courseService.deleteCourse(id);
    }

    @Post(':id/upload')
@UseInterceptors(
  FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',

      filename: (req, file, callback) => {
        const uniqueName = Date.now() + extname(file.originalname);
        callback(null, uniqueName);
      },
    }),
  }),
)
uploadFile(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File) {
  return {
    message: `File uploaded successfully for course ${id}`,
    courseId: id,
    filename: file.filename,
    originalname: file.originalname,
    size: file.size,
    mimetype: file.mimetype,
  };
}




}