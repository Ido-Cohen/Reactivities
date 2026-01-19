using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BasaeApiController : ControllerBase
    {
        private IMediator? _meditor;

        protected IMediator Mediator => _meditor ??= HttpContext.RequestServices.GetService<IMediator>()
         ?? throw new InvalidOperationException("IMediator service is unavailabe");
    }
}
