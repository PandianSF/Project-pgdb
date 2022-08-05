import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employees } from './user.entity';

@Injectable()
export class AppService {
// employees: any = []
 
constructor(
   @InjectRepository(Employees)
    private ER: Repository<Employees>,
){} 

/**   async onboardEmployee(data: any) {
    try {
          this.ER.find((employee) => {
                   if(employee.name === data.name) {
                         throw new Error('Employee already onboarded.');
                 }
          });  
	  const employeeId = Math.floor(Math.random()*1000)
          const companyMail = `${data.name.toLowerCase()}@board.com`;
          const newEmp = {...data,employeeId,companyMail };
        //  this.employees.push(newEmp);
	  const user = this.ER.create(newEmp)
	  await this.ER.save(newEmp);
	  return user;
        //  return newEmp;
     }
     catch (err) {
         return err.message
     } 
   } **/

  async newEmployee(data: any) {
	  const name = await this.ER.findOne({where: {name:data.name},});
	   
	  if (name == null){
		  const employeeId = Math.floor(Math.random()*1000)
		  const companyMail = `${data.name.toLowerCase()}@gmail.com`;
		  const newEmp = {...data,employeeId,companyMail };

		  const postEmp = await this.ER.save(newEmp);

		  console.log(postEmp);
	  return 'Employee posted'
	  }
	 else {
		 throw new Error('Error founded');
	 }
  }


 
 async  getEmployee() {
           return await this.ER.find();;
   }
 
 
 async  getEmployeeByName(body: any) {
	 console.log(body)
           const found = await this.ER.findOne({where:{ name:body},});
	   console.log(found);
	   return found;
	  }

async update(eid:any,toUpdate) {
	console.log(toUpdate)

   const res =	await this.ER.findOne({where:{employeeId:eid},});
   console.log(res);
	const updat =  await this.ER.update({employeeId:eid},toUpdate);
	console.log(updat); 
       return { isActive:false};	
   
}

async destroy(eid:any) {
	await this.ER.delete({employeeId:eid})
	//return { deleted:true};
}
}
