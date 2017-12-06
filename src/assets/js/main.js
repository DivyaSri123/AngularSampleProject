
		function htmlbodyHeightUpdate() {
			var height3 = $(window).height()
			var height1 = $('.nav').height() + 50
			height2 = $('.main').height()
			if (height2 > height3) {
				$('html').height(Math.max(height1, height3, height2) + 10);
				$('body').height(Math.max(height1, height3, height2) + 10);
			}
			else {
				$('html').height(Math.max(height1, height3, height2));
				$('body').height(Math.max(height1, height3, height2));
			}

		}
		function myFunction() {
			document.getElementById("myDropdown").classList.toggle("show");
		}

		window.onclick = function (event) {
			if (!event.target.matches('.dottedmenu')) {

				var dropdowns = document.getElementsByClassName("dropdown-content");
				var i;
				for (i = 0; i < dropdowns.length; i++) {
					var openDropdown = dropdowns[i];
					if (openDropdown.classList.contains('show')) {
						openDropdown.classList.remove('show');
					}
				}
			}
		}
		function myFunction1(id) {
			var id = id;
			document.getElementById(id).classList.toggle("show");
		}
		
		$(document).ready(function () {

			console.log("BootStrap & jquery loaded succesfully!")

			$('input').on('focus', function () {
				document.body.scrollTop = $(this).offset().top;
			});

			htmlbodyHeightUpdate()
			$(window).resize(function () {
				htmlbodyHeightUpdate()
			});
			$(window).scroll(function () {
				height2 = $('.main').height()
				htmlbodyHeightUpdate()
			});
			$('.no-collapsable').on('click', function (e) {
				e.stopPropagation();
			});

			/**admin nav head js**/

			// $("#select-multiple").click(function () {
			// 	$(".selecthide").hide();
			// 	$(".select-block").show();
			// 	$(".dottedmenu-body-head").hide();
			// 	$(".select-check").show();
			// 	$('.dottedmenu').show();
			// });
			// $(".back").click(function () {
			// 	$(".selecthide").show();
			// 	$(".select-block").hide();
			// 	$(".select-check").hide();
			// 	$(".dottedmenu-body-head").show();
			// });
			/**$(".border input[type=checkbox]").click(function () {
				$('.select-check input[type=checkbox]').prop('checked', this.checked);
			});**/


			// // $('.admin-nav-head a[href="#create"]').click(function (e) {
			// // 	$(".selecthide").hide();
			// // 	$(".refresh").show();
			// // });
			// // $('.admin-nav-head a[href="#manage"]').click(function (e) {
			// // 	$(".selecthide").show();
			// // 	$(".refresh").hide();
			// // });
			// $('.admin-nav-head a[href="#create"]').click(function (e) {
			// 	$(".selecthide").hide();
			// 	$(".select-block").hide();
			// 	$(".refresh").show();
			// });

			// $('#selectcheck').change(function () {
			// 	if (this.checked) {
			// 		$(".checkenable").show();
			// 		$(".checkdisable").hide();
			// 	}
			// 	else {
			// 		$(".checkenable").hide();
			// 		$(".checkdisable").show();
			// 	}
			// });
			// $('#selectcheckbelow,#selectcheckbelow1').change(function () {
			// 	if (this.checked) {
			// 		$(".checkenable").show();
			// 		$(".checkdisable").hide();
			// 	}
			// 	else {
			// 		$(".checkenable").hide();
			// 		$(".checkdisable").show();
			// 	}
			// });

			// $(".dottedmenu").click(function(){
			// 	$(".dropdown-content").fadeToggle();
			// });

			$(".drop").click(function(){
   				 $(".fadedrop").fadeToggle();
			});

			$(".drop1").click(function(){
   				 $(".fadedrop1").fadeToggle();
			});

			// $(".refresh").click(function () {
			// 	if(confirm('Are you sure to refresh fields')){
			// 		$(".empty").val("");
			// 	$(".checkbox-block").addClass('removetick');
			// 	$(".checkbox input").removeAttr('checked');
			// 	$(".profileimg").addClass('removeimg');
			// 	}
			// 	else
			// 	 {
				
			// 	}
			// });

			$(".bluebg").click(function () {
				$(".profileimg").removeClass('removeimg');
			});

			$(".checkbox-block label").click(function () {
				$(".checkbox-block").removeClass('removetick');	
			});
			
			/**arrow down and up js**/
	

			// $("#a1").click(function () {
			// 	$("#b1").slideDown("");
			// 	$(this).hide();
			// 	$("#d1").show();
			// });

			// $("#d1").click(function () {
			// 	$("#b1").slideUp("");
			// 	$(this).hide();
			// 	$("#a1").show();
			// });

			$("#a2").click(function () {
				$("#b2").slideDown("");
				$(this).hide();
				$("#d2").show();
			});

			$("#d2").click(function () {
				$("#b2").slideUp("");
				$(this).hide();
				$("#a2").show();
			});

			/**create js */

			
				$(".test").click(function() {
					$('.nav-tabs a[href="#create"]').tab('show');
				});
			
		
		/**pagination**/

			var pagelist = new List('test-list', {
				valueNames: ['name', 'profilename', 'profileemail', 'profileimage', 'profilecreated',
					'profilelogin', 'profilebtn'],
				page: 10,
				pagination: true
			});
		
		});


	/* Product Policy Script Section */

	
		$(document).ready(function () {
			$(".custom-checkbox label").addClass("disablebg");

			$("#customsize").click(function () {
				$(".custom-checkbox label").addClass("disablebg");

				$(".areaxs").css("display", "none");
				$(".aream").css("display", "none");
				$(".areal").css("display", "none");
				$(".areaxl").css("display", "none");
				$(".areaxxl").css("display", "none");
			});

			$("#custom").click(function () {
				$(".custom-checkbox label").removeClass("disablebg");
			});

			// $("#xs").click(function () {
			// 	if ($("#customsize").is(':checked')) {
			// 		$(".areaxs").css("display", "none");
			// 	}
			// 	else if ($("#custom").is(':checked')) {
			// 		$(".areaxs").fadeToggle();
			// 	}
			// });
			// $("#s").click(function () {
			// 	if ($("#customsize").is(':checked')) {
			// 		$(".areas").css("display", "none");
			// 	}
			// 	else if ($("#custom").is(':checked')) {
			// 		$(".areas").fadeToggle();
			// 	}
			// });

			// $("#m").click(function () {
			// 	if ($("#customsize").is(':checked')) {
			// 		$(".aream").css("display", "none");
			// 	}
			// 	else if ($("#custom").is(':checked')) {
			// 		$(".aream").fadeToggle();
			// 	}
			// });

			// $("#l").click(function () {
			// 	if ($("#customsize").is(':checked')) {
			// 		$(".areal").css("display", "none");
			// 	}
			// 	else if ($("#custom").is(':checked')) {
			// 		$(".areal").fadeToggle();
			// 	}
			// });
			// $("#xl").click(function () {
			// 	if ($("#customsize").is(':checked')) {
			// 		$(".areaxl").css("display", "none");
			// 	}
			// 	else if ($("#custom").is(':checked')) {
			// 		$(".areaxl").fadeToggle();
			// 	}
			// });
			// $("#xxl").click(function () {
			// 	if ($("#customsize").is(':checked')) {
			// 		$(".areaxxl").css("display", "none");
			// 	}
			// 	else if ($("#custom").is(':checked')) {
			// 		$(".areaxxl").fadeToggle();
			// 	}
			// });
			$(function () {

				// $('.editButton').on('click', function () {
				// 	$('.editdiv').show();
				// 	$('.ok').on('click', function () {
				// 	$('.editdiv').hide();
				// 	});
				// });
				// $('.cancel').on('click', function () {
				// 	console.log("s");
				// $('.editdiv').hide();
				// });
				$('#btnSave').click(function () {
					var value = $('.xsprice').val();
					$('#xs-sellingprice').html(value);
					$('#myModal').modal('hide');
					if ( $(".xsprice").val().length === 0) {
						$('.sphead').css('display','none');	
					}
					else{
						$('.sphead').css('display','block');	
					}
				});
				$('#btnSaveS').click(function () {
					var value = $('.sprice').val();
					$('#s-sellingprice').html(value);
					$('#myModal').modal('hide');
					if ( $(".sprice").val().length === 0) {
						$('.sphead').css('display','none');	
					}
					else{
						$('.sphead').css('display','block');	
					}
				});
				$('#btnSaveM').click(function () {
					var value = $('.mprice').val();
					$('#m-sellingprice').html(value);
					$('#myModal').modal('hide');
					if ( $(".mprice").val().length === 0) {
						$('.sphead').css('display','none');	
					}
					else{
						$('.sphead').css('display','block');	
					}
				});
				$('#btnSaveL').click(function () {
					var value = $('.lprice').val();
					$('#l-sellingprice').html(value);
					$('#myModal').modal('hide');
					if ( $(".lprice").val().length === 0) {
						$('.sphead').css('display','none');	
					}
					else{
						$('.sphead').css('display','block');	
					}
				});
				$('#btnSavexl').click(function () {
					var value = $('.xlprice').val();
					$('#xl-sellingprice').html(value);
					$('#myModal').modal('hide');
					if ( $(".xlprice").val().length === 0) {
						$('.sphead').css('display','none');	
					}
					else{
						$('.sphead').css('display','block');	
					}
				});
				$('#btnSaveXXL').click(function () {
					var value = $('.xxlprice').val();
					$('#xxl-sellingprice').html(value);
					$('#myModal').modal('hide');
					if ( $(".xxlprice").val().length === 0) {
						$('.sphead').css('display','none');	
					}
					else{
						$('.sphead').css('display','block');	
					}
				});
			});
		});
			// //for adding product image
			jQuery(function ($) {

				// image upload
				// $images = $('.imageOutput')

				// $(".imageUpload").change(function (event) {
				// 	readURL(this);
				// 	this.value = null;
				// });

				// function readURL(input) {

				// 	if (input.files && input.files[0]) {

				// 		$.each(input.files, function () {
				// 			var reader = new FileReader();
				// 			reader.onload = function (e) {
				// 				$images.prepend('<div class="img-wrap" style="float: left;padding:10px;border:1px solid #ccc; position: relative;margin:10px;height:140px;"><span class="closeicon" style="position: absolute;top: -11px;right: -5px;z-index: 100;background-color: #e0e0e0;padding: 5px 5px;color: #000;font-weight: bold;cursor: pointer;text-align: center;font-size: 17px;line-height: 10px;border-radius: 50%;border: 1px solid blue;color: blue;opacity:2;">&times;</span><img src="' + e.target.result + '" style="max-width: 150px; max-height: 150px" /></div>')
				// 				var leftPos = $('.imageOutput').scrollLeft();
				// 				$(".imageOutput").animate({scrollLeft: leftPos + 5000}, 500);
				// 			}
				// 			reader.readAsDataURL(this);
				// 		});
				// 		// for remove image
				// 		$('div').on('click', '.closeicon', function () {
				// 			$(this).parent('.img-wrap').remove();
				// 			$('.imageUpload').val("");
				// 		});

				// 	}
				// }


				//Global variable to 'remember' which record you're editing.

				// $('input#price').val('');
				// $('input#discount').val('');
				// $('input#cost').val('');
				// $('input#percent').val('');

				$(".allownumericwithdecimal").on("keypress keyup blur", function (event) {
				//this.value = this.value.replace(/[^0-9\.]/g,'');
				$(this).val($(this).val().replace(/[^0-9\.]/g, ''));
				if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
					event.preventDefault();
				}
			});
			/** Only Number Input Validation **/

			var db = [
				"drawLine",
				"drawCircle",
				"drawCircleMore",
				"fillLine",
				"Apple",
				"fillCircle",
				"one",
				"foo",
				"blackberry",
				"tweet",
				"force9",
				"westerners",
				"sport",
				"fillCircleMore"
			];

			/**function popupClearAndHide() {
				autocomplete_result.innerHTML = "";
				autocomplete_result.style.display = "none";
			}

			function updPopup() {
				if (!autocomplete.value) {
					popupClearAndHide();
					return;
				}
				var a = new RegExp("^" + autocomplete.value, "i");
				for (var x = 0, b = document.createDocumentFragment(), c = false; x < db.length; x++) {
					if (a.test(db[x])) {
						c = true;
						var d = document.createElement("p");
						d.innerText = db[x];
						d.setAttribute("onclick", "autocomplete.value=this.innerText;autocomplete_result.innerHTML='';autocomplete_result.style.display='none';");
						b.appendChild(d);
					}
				}
				if (c == true) {
					autocomplete_result.innerHTML = "";
					autocomplete_result.style.display = "block";
					autocomplete_result.appendChild(b);
					return;
				}
				popupClearAndHide();
			}**/

			/*for multiselect*/

			/**autocomplete.addEventListener("keyup", updPopup);
			autocomplete.addEventListener("change", updPopup);
			autocomplete.addEventListener("focus", updPopup);**/

			$('.multiselect-wrap ul').hide();
			$('#colorname').on("focus", function (e) {
				$('.multiselect-wrap ul').show();
			})
			$('.multiselect-wrap ul li').on('click', function () {
				var clicked = $(this).html();
				$('.in-wrap').append('<label style="margin: 0 1px; padding: 1px 6px 1px 8px; border: 1px solid #aaa; border-radius: 3px; box-shadow: inset 0 0 20px 2px rgba(0,0,0,.2);">' + clicked + '<span style="cursor: pointer; position: relative; font-size: 13px; margin-left: 10px;">X</span></label>');
				var labelval = $('.in-wrap label').html();
			})

			$('.in-wrap').on('click', 'span', function () {
				$(this).parent().hide();
				$(this).hide();
			})

			$('.step').change(function () {
				var next_step = $(this).next('.step');
				var all_next_steps = $(this).nextAll('.step');
				// If the element *has* a value
				if ($(this).val()) {
					next_step.attr('disabled', false);
				}
				// If the element doesn't have a value
				else {
					// Clear the value of all next steps and disable
					all_next_steps.val('');
					all_next_steps.attr('disabled', true);
				}
			});

			$('.step').keydown(function (event) {
				// If they pressed tab AND the input has a (valid) value
				if ($(this).val() && event.keyCode == 9) {
					$(this).next('.step').attr('disabled', false);
				}
			});

			$(".categories-toggle").on('click', function (eve) {	
				eve.preventDefault();
				$(this).toggleClass("down");
			});

			});
