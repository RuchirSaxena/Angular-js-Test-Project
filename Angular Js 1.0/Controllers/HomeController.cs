using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Angular_Js_1._0.Controllers
{
    public class HomeController : Controller
    {
        // GET: GetDepartments
        public ActionResult GetDepartments()
        {
            EmployeedatabaseEntities objEmp = new EmployeedatabaseEntities();
            var depts = objEmp.Departments.ToList();
            return Json(depts,JsonRequestBehavior.AllowGet);
        }
        public ActionResult GetEmployees()
        {
            EmployeedatabaseEntities objEmp = new EmployeedatabaseEntities();
            var Emps = objEmp.Employees.ToList();
            return Json(Emps, JsonRequestBehavior.AllowGet);
        }
        public ActionResult GetEmployeeByDeptId(int id)
        {
            EmployeedatabaseEntities objEmp = new EmployeedatabaseEntities();
            var Emps = objEmp.Employees.Where(emp => emp.Department_DepartmentId == id).ToList();
            return Json(Emps, JsonRequestBehavior.AllowGet);
        }
    }
}