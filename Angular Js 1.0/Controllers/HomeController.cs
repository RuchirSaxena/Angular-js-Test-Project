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
            EmployeeDB objEmp = new EmployeeDB();
            var depts = objEmp.Departments.ToList();
            return Json(depts,JsonRequestBehavior.AllowGet);
        }
    }
}