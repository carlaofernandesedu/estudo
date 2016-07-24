using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(IntroMVC5.Startup))]
namespace IntroMVC5
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
