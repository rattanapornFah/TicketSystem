using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ticketSystem.Controllers
{
    public class AllTicketController : Controller
    {
        // GET: AllTicket
        public ActionResult allTicket()
        {
            return View();
        }
    }
}