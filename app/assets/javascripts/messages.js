$(function(){
  function buildHTML(message){
    if(message.image){
      let html =
      `<div class="main-chat__message-list__container ">
          <div class="main-chat__message-list__container__info">
            <div class="main-chat__message-list__container__info__name">
              ${message.user_name}
            </div>
            <div class="main-chat__message-list__container__info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="main-chat__message-list__container__content">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else{
      let html =
      `<div class="main-chat__message-list__container ">
          <div class="main-chat__message-list__container__info">
            <div class="main-chat__message-list__container__info__name">
              ${message.user_name}
            </div>
            <div class="main-chat__message-list__container__info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="main-chat__message-list__container__content">
            <p class="Message__content">
              ${message.content}
            </p>
          </div>
      </div>`
      return html;
    }
  }
  $(".main-chat__message-form").on("submit",function(e){
    e.preventDefault();
    let url = $(this).attr('action');
    let formData = new FormData(this);
    $.ajax({
      url:url,
      type:'POST',
      data:formData,
      dataType:'json',
      processData:false,
      contentType:false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.main-chat__message-list').append(html); 
      $('.main-chat__message-list').animate({ scrollTop: $('.main-chat__message-list')[0].scrollHeight});     
      $('form')[0].reset();
      $('.submit-btn').attr('disabled',false);
    })
    .fail(function(){
        alert("メッセージ送信に失敗しました");
    });
  });
});