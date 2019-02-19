var distance_X=30; 
var	distance_Y=30; 
var displacement_X =8;
var displacement_Y =12;
var displacement_T=2;
var touches =0;
var Total_Score=0;
var large=0;	
var var_speed=0;
var variable_one,variable_two,variable_three;



function initialize()
{
	
}

function startGame()
{
	
	 
	 variable_one=setInterval(moveBall, 200);
	 function frame() {
		 var elem = document.getElementById("ball");
			var ball_bottom = document.getElementById("ball").getBoundingClientRect().bottom;
			var ball_top = document.getElementById("ball").getBoundingClientRect().top;
			var ball_left = document.getElementById("ball").getBoundingClientRect().left;
			var ball_right = document.getElementById("ball").getBoundingClientRect().right;
			var left_court = document.getElementById("court").getBoundingClientRect().left;
			 var right_court = document.getElementById("court").getBoundingClientRect().right;
			 var top_court = document.getElementById("court").getBoundingClientRect().top;
			 var bottom_court = document.getElementById("court").getBoundingClientRect().bottom;
			 
			 var pos = 0;
	   if ((bottom_court < ball_bottom )  || (top_court > ball_top ) || (left_court > ball_left)) {
		   console.log(bottom_court)
		   console.log(ball_bottom)
	   } 
	   else
	   {
	     elem.style.top = (ball_top+15.3 - top_court) + "px"; 
	     elem.style.left = (ball_left+16 - left_court) + "px"; 
	   }    	
	   	
	   document.getElementById("paddle").onmousemove=movePaddle;
	   
	   
	   
	   if(document.getElementById("100").checked)
		{
			document.getElementById("messages").innerHTML = "Speed selected is slow, Time interval: 200";
			clearInterval(variable_two);
			clearInterval(variable_three);
			variable_one=setInterval(moveBall, 100);	
			
			
		}
		else{
			clearInterval(variable_one);
			clearInterval(variable_two);
			clearInterval(variable_three);
		}
		 if(document.getElementById("200").checked)
		{
			document.getElementById("messages").innerHTML = "Speed selected is medium, Time interval: 100";
				
			clearInterval(variable_one);
			clearInterval(variable_three);
			variable_two=setInterval(moveBall, 50);
		}
		else if(document.getElementById("300").checked)
		{
			document.getElementById("messages").innerHTML = "Speed selected is fast, Time interval: 40";
			
			clearInterval(variable_two);
			clearInterval(variable_one);
			variable_three=setInterval(moveBall, 1);
		}
	   
	   	
	 
	 }
}


function movePaddle(event)
{
	
	var mycourt=document.getElementById("court");
	var mypaddle=document.getElementById("paddle");
	if(event.offsetY)
	{
	var paddlemove=event.offsetY;
	}
	else
	{
	var paddlemove=event.pageY-mycourt.offsetTop;	
	}
	if(paddlemove<400 && paddlemove>70)
	{
		mypaddle.style.top=(paddlemove-70)+"px";
	}
	else if(paddlemove<70){
		mypaddle.style.top="0px";
	}
	else if(paddlemove>400){
		mypaddle.style.top="400px";
	}
	
}
	 
function moveBall()
{
	var ball_bottom = document.getElementById("ball").getBoundingClientRect().bottom;
	var ball_top = document.getElementById("ball").getBoundingClientRect().top;
	var ball_left = document.getElementById("ball").getBoundingClientRect().left;
	var ball_right = document.getElementById("ball").getBoundingClientRect().right;
	var left_court = document.getElementById("court").getBoundingClientRect().left;
	 var right_court = document.getElementById("court").getBoundingClientRect().right;
	 var top_court = document.getElementById("court").getBoundingClientRect().top;
	 var bottom_court = document.getElementById("court").getBoundingClientRect().bottom;
	 console.log("Left =" + left_court + "Right ="+ right_court);
	 console.log("Top =" + top_court + "Bottom ="+bottom_court);
	 console.log("Difference in the court = " +(bottom_court-top_court));
	 
	 
		  if(distance_X >=398||distance_X<=-82)
		{
		  displacement_X = -displacement_X;  
		}
		if(distance_Y<7 )
		{
		 displacement_Y = -displacement_Y;  
		}
		
		var pleft=paddle.getBoundingClientRect().left;
		var pright=paddle.getBoundingClientRect().right;
		var ptop = paddle.getBoundingClientRect().top;
		var pbottom = paddle.getBoundingClientRect().bottom;
		console.log("Padlle Left = " + pleft);
		console.log("Paddle Right = " + pright);
		console.log("Padlle Top = " + ptop);
		console.log("Paddle Bottom = " +pbottom);
		
		if(distance_Y>727)
		{
		if((ball_top >= ptop) && (ball_top <= ptop+102))
		{
		displacement_Y=-displacement_Y;
		touches++;
		Total_Score=touches;
		document.getElementById("strikes").innerHTML = touches;
		}
		
		if(distance_Y>765)
			{
			if(Total_Score>large)
			{
			large=Total_Score;
			document.getElementById("score").innerHTML = large;
			}
			
			touches=0;Total_Score=0;
			distance_X=0;distance_Y=-17;displacement_X =8;displacement_Y =17;displacement_T=1;
			document.getElementById("messages").innerHTML = "You missed it! Please try again!";		
			//alert('reached');
			document.getElementById("ball").style.top= distance_X+'px';
			document.getElementById("ball").style.left=distance_Y+'px';
			document.getElementById("strikes").innerHTML = touches;
			clearInterval(variable_one);
			clearInterval(variable_two);
			clearInterval(variable_three);
			}
		}
		
		distance_X =distance_X+displacement_X*displacement_T;
	    distance_Y =distance_Y+displacement_Y*displacement_T;

		document.getElementById("ball").style.top=distance_X+"px";
		document.getElementById("ball").style.left=distance_Y+"px";

}