using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Filters;

namespace IntroMVC5.CustomFilters
{
    public class CustomAuthenticationAttribute : ActionFilterAttribute, IActionFilter
    {
        public void OnAuthentication(AuthenticationContext filtercontext)
        {

        }

        public void OnAuthenticationChallenge(AuthenticationChallengeContext filterContext)
        {
            var user = filterContext.HttpContext.User;
            if(user==null||!user.Identity.IsAuthenticated)
            {
                System.Diagnostics.Debug.WriteLine("Tentativa de acesso nao autorizada");
                filterContext.Result = new HttpUnauthorizedResult();

            }
        }
    }
}