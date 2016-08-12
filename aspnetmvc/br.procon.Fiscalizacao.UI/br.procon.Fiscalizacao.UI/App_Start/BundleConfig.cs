using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace br.procon.Fiscalizacao.UI
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/Assets/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Assets/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/scripts").Include(
                "~/Assets/Scripts/scripts.js",
                "~/Assets/Scripts/bootstrap.js",
                "~/Assets/Scripts/global.js",
                "~/Assets/Scripts/jquery.dataTables.min.js",
                "~/Assets/Scripts/dataTables.responsive.js"));

            bundles.Add(new StyleBundle("~/bundles/css").Include(
                "~/Assets/Css/bootstrap.css",
                "~/Assets/Css/bootstrap-custom.css",
                "~/Assets/Css/estilo_interno.css",
                "~/Assets/Css/responsivo_interno.css",
                "~/Assets/Css/dataTables.css",
                "~/Assets/Css/dataTables.responsive.css").Include("~/Assets/font-awesome/css/font-awesome.css",new CssRewriteUrlTransform()));
        }
    }
}