var slow,medium,fast;
var x=30; 
var	y=30; 
var dx =8;
var dy =12;
var dt=2;
var count_strikes =0;
var max_score=0;
var large=0;	
var var_speed=0;


function setSpeed()
{   
    if(document.getElementById("10").checked)
	{
	var slow;
	console.log("ID - 10");
	console.log("entered slow");
	clearInterval(medium);
	clearInterval(fast);
	slow = setInterval(startGame, 35);
	console.log("I am in slow mode here");
	document.getElementById("messages").innerHTML("Spped is slow");
	}
	else
	{
	clearInterval(slow);
	clearInterval(medium);
	clearInterval(fast);
	}
	if(document.getElementById("20").checked)
	{
	console.log("ID - 0");
	console.log("entered slow");
	clearInterval(slow);
	clearInterval(fast);
	medium = setInterval(startGame, 15);
	console.log("I am in medium mode");
	document.getElementById("messages").innerHTML("Spped is medium");
	}
	else
	{
	clearInterval(slow);
	clearInterval(medium);
	clearInterval(fast);
	}
	if(document.getElementById("30").checked)
	{
	console.log("ID - 30");
	console.log("entered fast");
	clearInterval(slow);
	clearInterval(medium);
	fast = setInterval(startGame, 8);	
	console.log("I am in fast mode");
	document.getElementById("messages").innerHTML("Spped is fast");
	}
	else
	{
	clearInterval(slow);
	clearInterval(medium);
	clearInterval(fast);
		
	}
}



function startGame()
{
var elem = document.getElementById("ball");   
var borders_right = document.getElementById("court").getBoundingClientRect().right;
var borders_left = document.getElementById("court").getBoundingClientRect().left;
var borders_top = document.getElementById("court").getBoundingClientRect().top;
var borders_bottom = document.getElementById("court").getBoundingClientRect().bottom;
var pos = 0;
console.log(borders_bottom,borders_left,borders_right,borders_top);
console.log(pos);
var id = setInterval(frame, setSpeed);
function frame()
{
if(x >=401||x<=-83)
	{
	   dx = -dx;  
    }
	if(y<0)
    {
		dy = -dy;  
    }
	var pb=paddle.getBoundingClientRect().bottom;
	var pt=paddle.getBoundingClientRect().top;
	var b=x;
	if(y>755)
	{
	if((x<=(pt-92.36666870117188) && x>((pt-92.36666870117188)-102))|| ((x<=(pt-167.36666870117188) && x>(pt-167.36666870117188)-102)))
	{
	dy=-dy;
	count_strikes++;
	max_score=count_strikes;
	document.getElementById("strikes").innerHTML = count_strikes;
	}	
	}
	// If the ball goes beyond the paddle, stop the game
	if(y>765)
	{	

		if(max_score>large)
		{
		large=max_score;
		document.getElementById("score").innerHTML = large;
		}
		
		count_strikes=0;max_score=0;
		x=0;
		y=-17;
		document.getElementById("messages").innerHTML = "You missed it! Please try again!";		
		document.getElementById("ball").style.top= x+'px';
		document.getElementById("ball").style.left=y+'px';
		document.getElementById("strikes").innerHTML = 0;
		
		
	}
	x =x+dx*dt;
    y =y+dy*dt;

	document.getElementById("ball").style.top=x+"px";
	document.getElementById("ball").style.left=y+"px"
	
}

function resetGame()
{
	if(document.getElementById("10").checked)
	{	
		location.reload();
	}
	else if(document.getElementById("20").checked)
	{
		location.reload();
	}
	else 
	{
		location.reload();
	}
}


function movePaddle(event)
{
	var court=document.getElementById("court");
	var paddle=document.getElementById("paddle");
	var cy;
	if(event.offsetY)
	{
	cy=event.offsetY;
	}
	else
	{
	cy=event.pageY-court.offsetTop;	
	}
	if(cy<401 && cy>69)
	{
		paddle.style.top=(cy-67)+"px";
	}
	else if(cy<69){
		paddle.style.top="0px";
	}
	else if(cy>400){
		paddle.style.top="401px";
	}
	
	
}

function moveball()
{
var elem = document.getElementById("ball");   
var borders_right = document.getElementById("court").getBoundingClientRect().right;
var borders_left = document.getElementById("court").getBoundingClientRect().left;
var borders_top = document.getElementById("court").getBoundingClientRect().top;
var borders_bottom = document.getElementById("court").getBoundingClientRect().bottom;
var pos = 0;
var id = setInterval(frame, setSpeed);
function frame()
 {
	if (pos >= 0)
	{
		pos++;
		console.log("hey");
		elem.style.top = pos + 'px';
		elem.style.left = pos + 'px' ;
		console.log(elem.style.top);
		console.log(elem.style.top);
		var ballpos;
		ballpos = elem.style.top.slice(0, -2);
		console.log(ballpos);
		if ((ballpos >= borders_top) || (ballpos >= borders_bottom) || (ballpos >= borders_left) || (ballpos >= borders_right))
		{	
		console.log("did i come here");
		elem.style.top = -ballpos + 'px';
		elem.style.top = -ballpos;
		}
		
	}
}
}



