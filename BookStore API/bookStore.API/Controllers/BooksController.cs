using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BookStore.API.Data;
namespace BookStore.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BooksController : ControllerBase
{
    private readonly BookStoreDbContext _bookStoreDbContext;
    public BooksController(BookStoreDbContext bookStoreDbContext)
    {
        _bookStoreDbContext = bookStoreDbContext;
    }
[HttpGet]
public async Task<ActionResult> GetAllBooks()
{
    var books = await _bookStoreDbContext.Books.ToListAsync();
    return Ok(books);
}
[HttpPost]
public async Task<IActionResult> AddBook([FromBody] Book bookRequest){
    await _bookStoreDbContext.Books.AddAsync(bookRequest);
    await _bookStoreDbContext.SaveChangesAsync();

    return Ok(bookRequest);
}
[HttpGet]
[Route("{id}")]
public async Task<IActionResult>  GetBook([FromRoute]int id ){
    var book = await _bookStoreDbContext.Books.FirstOrDefaultAsync(x=>x.Id== id);
    
    if (book == null ){
        return NotFound($"The book with the Id: '{id}' was not found");
    }
    return Ok(book);

}

[HttpPut]
[Route("{id}")]
public async Task<IActionResult>  UpdateBook([FromRoute]int id, Book updateBookRequest ){
    var book = await _bookStoreDbContext.Books.FindAsync(id);
    
    if (book == null ){
        return NotFound($"The book with the Id: '{id}' was not found");
    }

    book.Title = updateBookRequest.Title;
    book.Author=updateBookRequest.Author ;
    book.PublicationDate = updateBookRequest.PublicationDate;

   await _bookStoreDbContext.SaveChangesAsync();
    return Ok(book);

}
[HttpDelete]
[Route("{id}")]
public async Task<IActionResult>  DeleteBook([FromRoute]int id ){
    var book = await _bookStoreDbContext.Books.FindAsync(id);
    
    if (book == null ){
        return NotFound($"The book with the Id: '{id}' was not found");
    }
    _bookStoreDbContext.Books.Remove(book);
   await _bookStoreDbContext.SaveChangesAsync();
    return Ok(book);

}
}