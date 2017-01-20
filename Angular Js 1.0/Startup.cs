using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Angular_Js_1._0.Startup))]
namespace Angular_Js_1._0
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
