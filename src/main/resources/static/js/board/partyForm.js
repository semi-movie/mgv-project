$(function() {
      // 오늘 날짜를 구합니다.
      let today = new Date();

      // 일주일 간의 날짜와 요일을 배열에 저장합니다.
      let weekDatesAndDays = [];
      for (let i = 0; i < 7; i++) {
        let date = new Date(today.getTime() + (i * 24 * 60 * 60 * 1000));
        let dateNumber = date.getDate();
        let dayName = date.toLocaleDateString('kr-KR', { weekday: 'short' });

        weekDatesAndDays.push({
          Date : date,
          date: dateNumber,
          day: dayName
        });
      }

      // 결과를 출력합니다.
      $.each(weekDatesAndDays, function(index, item) {
        let dateSpanId = "#span-date-" + (index + 1);
        let daySpanId = "#span-day-" + (index + 1);
        let date = "#btn-date-" + (index + 1);
		
        $(dateSpanId).text(item.date);
        $(daySpanId).text(item.day);
        
        let year = item.Date.getFullYear();
		let month = ("0" + (item.Date.getMonth() + 1)).slice(-2);
		let day = ("0" + item.Date.getDate()).slice(-2);
		
		let formattedDate = year + "-" + month + "-" + day ;
        
        $(date).attr("th:value", formattedDate)
      });

	
	let selectedDate;
	$("#date-select button").click(function() {
		
		$(this).css('border-bottom-color', 'white')
		$(this).parent().siblings().find('button').css('border-bottom-color', '#E6E6FA')
		
		let today = new Date();
		
		selectedDate = $(this).attr("th:value");
		theaterNo =  document.querySelector("select[name=theaterNo]");
		movieNo =  document.querySelector("select[name=movieNo]");
		    // AJAX 요청을 보내서 선택한 날짜에 해당하는 데이터를 가져옴
/*
		    $.ajax({
	        url: '/board/party/getSchedule',
	        method: 'GET',
	        data: {
	            date: selectedDate,
	            movieNo: movieNo,
	            theaterNo: theaterNo
       		 },
	        success: function(response) {
				
	        },
	        error: function(xhr, status, error) {
	            console.error(error); // 오류 메시지 출력
	        }
	    });
 */
	});
	
})

	
	 // 지역 멀티셀렉트
	 	function changeLoc() {
		let el = document.querySelector("select[name=theaterNo]");
		el.innerHTML = "";  // select박스의 내부 컨텐츠를 전부 지운다.
		el.disabled =false; // select박스를 활성화상태로 바꾼다.
		let locationNo = document.querySelector("select[name=locationNo]").value
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200){
				let text = xhr.responseText;
				let theaters = JSON.parse(text);
				if (theaters.length === 0){
					el.disabled = true;
				}else {
					let options = `<option id="theater-option" value="0" selected disabled>극장선택</option>`;
					theaters.forEach(function(theater) {
						options += `<option id="theater-option" value="${theater.no}" >${theater.name}</option>`;

					});
					el.innerHTML = options;
					}
				}
			}
			xhr.open("GET", "theaterByLocationNo?locationNo=" + locationNo );
			xhr.send();
		}
	
		function changeTh(){
		let el = document.querySelector("select[name=movieNo]");
		el.innerHTML = "";  // select박스의 내부 컨텐츠를 전부 지운다.
		el.disabled =false; // select박스를 활성화상태로 바꾼다.
		let theaterNo = document.querySelector("select[name=theaterNo]").value
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200){
				let text = xhr.responseText;
				let theaters = JSON.parse(text);
				if (theaters.length === 0){
					el.disabled = true;
				}else {
					let options = `<option id="theater-option" value="0" selected disabled>영화선택</option>`;
					theaters.forEach(function(movie) {
						options += `<option id="theater-option" value="${movie.no}" >${movie.name}</option>`;

					});
					el.innerHTML = options;
					}
				}
			}
			xhr.open("GET", "movieBytheaterNo?locationNo=" + theaterNo );
			xhr.send();
		}
	