import { Body, Controller, Get, Post, Param, Patch, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('board')
export class AppController {
  constructor(private readonly appService: AppService) {}

    //ON BOARDING EMPLOYEES
       @Post('new')
      async onboardEmployee(@Body() data: any) {
        //   const response =await this.appService.onboardEmployee(data)
              // return response;

	  const user = await this.appService.newEmployee(data);
	  return {
		  message:'Employee onboarded Successfully',
		  user
	  };
       }
 
       //GET EMPLOYEE
       @Get ('get-all')
     async  getEmployee() {
            //   const response = this.appService.getEmployee();
              // return response;
	      const users = await this.appService.getEmployee();
	      return {
		      message:'All data returned',
		      users
	      };
       }
 
       // GET EMPLOYEE BY NAME
       @Get (':name')
      async  getEmployeeByName(@Param('name') name: string) {
     // const response = this.appService.getEmployeeByName(data)
       //        return response;
       const find = await this.appService.getEmployeeByName(name);
       return {
	       message:'Data found successfully',
	       find,
       };
      }

      //TO UPDATE
    @Patch(':employeeId')
 async update(@Param('employeeId')eid,@Body() data:any) {
        await this.appService.update(eid,data);
        return {
          message: 'User updated successfully',
        };
      }

      //TO DESTROY
      @Delete(':employeeId')
      async delete(@Param('employeeId')eid:any) {
	      await this.appService.destroy(eid);
	      return {
		      message: 'Data destroyed',
	      };
      }

}
