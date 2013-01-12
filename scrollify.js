/* 
	################################################################################# 
	#																				#
	#									:)											#	
	#							  Jossie Mathews									#
	#																				#
	#################################################################################		
*/
	
		var scrollify = (function(){
			var targetDiv = "",
			mouseOver = false,
			currentTop = 0,
			scrollerHeight = 0,
			perMove = 0,			
			newDiv = document.createElement("div");
			var readifyDiv = function(nameOfDiv){
				targetDiv.style.overflow = "hidden";
			}
			var addScroll = function(nameOfDiv){
				if(targetDiv.scrollHeight == targetDiv.clientHeight){
					return false;
				}
				newDiv.style.zIndex = 1000;
				newDiv.style.opacity = ".6";
				newDiv.style.backgroundColor = "#666";
				newDiv.style.height = (targetDiv.clientHeight * (targetDiv.clientHeight/targetDiv.scrollHeight))+"px";
				newDiv.style.width = "14px";
				newDiv.style.position = "absolute";
				newDiv.style.left = targetDiv.clientWidth+'px';
				newDiv.style.top = targetDiv.clientTop + targetDiv.offsetTop+'px' ;
				newDiv.style.borderRadius = '2em'
				targetDiv.insertBefore(newDiv,targetDiv.firstChild);
			}
			var addScrollEvent = function(evt){
				evt.preventDefault();
				var move = (evt.wheelDeltaY > 0) ? -5 : 5;
				var perMover =  (evt.wheelDeltaY > 0) ? (-1 * perMove) : perMove;
				console.log(perMove)
				currentTop = parseInt(newDiv.style.top.slice(0,-2));
				newDiv.style.top = (currentTop + perMover >= 0 && currentTop + perMover <= targetDiv.clientHeight - newDiv.clientHeight) ? currentTop + perMover+"px" : currentTop;
				targetDiv.scrollTop = targetDiv.scrollTop + move;
			}
			return {
				init : function(divName){
					targetDiv = document.getElementById(divName);
					readifyDiv(divName);
					addScroll(divName);
					perMove = (targetDiv.scrollHeight/5);
					perMove = Math.ceil((targetDiv.clientHeight)/perMove);
					targetDiv.onmouseover = function(){
						mouseOver = true;
					}
					
					targetDiv.onmouseout = function(){
						mouseOver = false;
					}
					
					document.body.onmousewheel = function(scrlEvt){
						if(mouseOver){
							addScrollEvent(scrlEvt);
						}
					}
					
				}
			}
		})();
	