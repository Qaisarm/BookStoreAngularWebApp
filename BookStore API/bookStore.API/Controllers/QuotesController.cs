using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BookStore.API.Data;
namespace BookStore.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class QuotesController: ControllerBase
{
    private readonly BookStoreDbContext _bookStoreDbContext;
    public QuotesController(BookStoreDbContext bookStoreDbContext)
    {
        _bookStoreDbContext = bookStoreDbContext;
    }
[HttpGet]
public async Task<ActionResult> GetAllQuotes()
{
    var quotes = await _bookStoreDbContext.Quotes.ToListAsync();
    return Ok(quotes);
}
[HttpPost]
public async Task<IActionResult> AddQuote([FromBody] Quote quoteRequest){
    await _bookStoreDbContext.Quotes.AddAsync(quoteRequest);
    await _bookStoreDbContext.SaveChangesAsync();

    return Ok(quoteRequest);
}
[HttpGet]
[Route("{id}")]
public async Task<IActionResult>  GetQuote([FromRoute]int id ){
    var quote = await _bookStoreDbContext.Quotes.FirstOrDefaultAsync(x=>x.Id== id);
    
    if (quote == null ){
        return NotFound($"The quote with the Id: '{id}' was not found");
    }
    return Ok(quote);

}

[HttpPut]
[Route("{id}")]
public async Task<IActionResult>  UpdateQuote([FromRoute]int id, Quote updateQuoteRequest ){
    var quote = await _bookStoreDbContext.Quotes.FindAsync(id);
    
    if (quote == null ){
        return NotFound($"The quote with the Id: '{id}' was not found");
    }

    quote.Title = updateQuoteRequest.Title;
    quote.Author=updateQuoteRequest.Author ;

   await _bookStoreDbContext.SaveChangesAsync();
    return Ok(quote);

}
[HttpDelete]
[Route("{id}")]
public async Task<IActionResult>  DeleteQuote([FromRoute]int id ){
    var quote = await _bookStoreDbContext.Quotes.FindAsync(id);
    
    if (quote == null ){
        return NotFound($"The quote with the Id: '{id}' was not found");
    }
    _bookStoreDbContext.Quotes.Remove(quote);
   await _bookStoreDbContext.SaveChangesAsync();
    return Ok(quote);

}
}