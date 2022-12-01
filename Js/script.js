'use strict';

//-----------------------1. Khai báo biến, hằng số---------------------------------

//1.1. Khai báo cho form check mail
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const formEmail = document.querySelector('.personal-info-form');
const bttsubmit = document.querySelector('#personal-info-form-button');
const txtemail = document.querySelector('#personal-info-form-inputtext'); 
const lbalertEmail = document.querySelector('#personal-info-form-inputlabel');
const divpersonalinfo = document.querySelector('.mt-40');
const spanpersonalinfoemail = document.querySelector('.mt-40-email');


//1.2. Khai báo cho view kỹ năng
const gridboxskill= document.querySelector('.grid-box-jobinfo-title');
const myNodeList = document.querySelectorAll('.grid-box-jobinfo-title');
const viewmore= document.querySelector('.view-more');
const gridboxskillbody= document.querySelector('.grid-box-info-body');
//-----------------------2. Khai báo hàm---------------------------------

//2.1. Hàm xác check điều kiện nhập vào có phải là mail ko
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

//2.2. Hàm xác check mail thỏa điều kiện dúng mail và ko để trống
  const bttsubmit_click = function(email) {
    if (email != '' && regexEmail.test(email) && email === spanpersonalinfoemail.textContent)
    {
        formEmail.classList.add('hidden');
        divpersonalinfo.classList.add('show');
    }
    else
    {
        lbalertEmail.classList.add('color-red');
        lbalertEmail.textContent = 'Kiểm tra dữ liệu có hợp lệ hay không';
    }
  }

//-----------------------3. Xử lý sự kiện---------------------------------
//3.1. Sự kiến click hiển thị thông tin cá nhân
bttsubmit.addEventListener('click', function() {
    bttsubmit_click(txtemail.value);
} );

//3.2. Sự kiến hiển thị nút view ở title kỹ năng
for (let i = 0; i < myNodeList.length; i++) { //duyệt các node con
  //hàm hiển thị viewmore khi di chuột tới  
  myNodeList[i].addEventListener('mouseover', function(){
      const node =  myNodeList[i].querySelector('.view-more');
      //tìm node cha của node hiện tại
      const nodeparrent = myNodeList[i].parentNode;
      //tìm node cần ẩn hiện từ node cha.
      const nodeviewmore = nodeparrent.querySelector('.grid-box-info-body');
      if (node.innerHTML == '<i class="fa fa-caret-down"></i>View more')
      {
          node.classList.add('show');
      } 
      //sự kiện click ẩn hiện thông tin
      node.addEventListener('click', function(){
        let checkviewmode = 0;
        if (node.innerHTML == '<i class="fa fa-caret-down"></i>View more')
        {
          nodeviewmore.classList.remove('hidden');
          nodeviewmore.classList.add('show');
          checkviewmode =1;
        
        }
        else if (node.innerHTML == '<i class="fa fa-caret-up"></i>View less') 
        {
          //console.log(node.innerHTML + 1);
          nodeviewmore.classList.remove('show');
          nodeviewmore.classList.add('hidden');
          checkviewmode = 0; 
        }
        //console.log(node.innerHTML);
        if (checkviewmode == 1)
        {
          node.innerHTML = '<i class="fa fa-caret-up"></i>View less';
        }
        else if (checkviewmode == 0)
        {
          node.innerHTML = '<i class="fa fa-caret-down"></i>View more'
        }
      })
      
      //Sự kiện rời chuột khỏi vùng chọn
      myNodeList[i].addEventListener('mouseleave', function(){
        if (node.innerHTML === '<i class="fa fa-caret-down"></i>View more')
        {
            node.classList.remove('show');
            node.classList.add('hidden');
        }
      });
      
  });

    
}

