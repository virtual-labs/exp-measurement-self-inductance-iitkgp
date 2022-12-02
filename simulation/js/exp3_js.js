
var w,check=0;
var la, ra, qx;


function add(x,y)
{ 
	var z=[];
	z[0]=x[0] + y[0];
	z[1]=x[1] + y[1];
	return z;
}
function mult(x,y)
{ 
	var z=[];
	z[0]=(x[0] * y[0]) - (x[1] * y[1]);
	z[1]=(x[0] * y[1]) + (x[1] * y[0]);
	return z;
}
function div(x,y)
{ 
	var z=[]; var t=[];
	t[0]=(y[0]) / ((y[0] * y[0]) + (y[1] * y[1]));
	t[1]=(-1 * y[1]) / ((y[0] * y[0]) + (y[1] * y[1]));
	z=mult(x,t);
	return z;
}

/////////////////////////////// The code starts from here/////////////////////////////////////
function simulate_rc()
{
	if(check==1){
		document.f1.l333.value = la;
		document.f1.r333.value = ra;
		document.f1.rd33.value = qx;
	}
	else{
		alert("Please Switch on the supply to verify the milivoltmeter reading first.");
	}
}
function printDiv(divName) {
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;	 
     document.body.innerHTML = printContents;
     window.print();
     document.body.innerHTML = originalContents;
}
function changeImage() {
	
		var image = document.getElementById('myImage');
		var im1= document.getElementById('r1');
		var im2= document.getElementById('r2');
		var im3= document.getElementById('r3');
		var im4= document.getElementById('c1');
		var im5= document.getElementById('f1');
		var im6= document.getElementById('pr1');
		var im7= document.getElementById('pr2');
		var im8= document.getElementById('pr3');
		var im9= document.getElementById('pc1');
		if (image.src.match("s1")) {
			image.src = "./images/s2.png"; cf3=1;
			im1.setAttribute('readonly', 'readonly'); im2.setAttribute('readonly', 'readonly'); im3.setAttribute('readonly', 'readonly');
			im4.setAttribute('readonly', 'readonly'); im5.setAttribute('readonly', 'readonly'); im6.setAttribute('readonly', 'readonly');
			im7.setAttribute('readonly', 'readonly'); im8.setAttribute('readonly', 'readonly'); im9.setAttribute('readonly', 'readonly');
			$('#s1').attr('disabled', true);
			check=1;
			execute_ckt();
		} else {
			image.src = "./images/s1.png"; cf3=0;
			im1.removeAttribute('readonly'); im2.removeAttribute('readonly'); im3.removeAttribute('readonly');
			im4.removeAttribute('readonly'); im5.removeAttribute('readonly'); im6.removeAttribute('readonly');
			im7.removeAttribute('readonly'); im8.removeAttribute('readonly'); im9.removeAttribute('readonly');
			document.f1.A1.value = 0; $('#s1').attr('disabled', false);
			perform_meter();
		}
	}
	function execute_ckt()
	{
		document.f1.A1.value=0;
		var r1=[], r2=[], r3=[], v1=[], lx1=[], c1=[], f1;
		var z1=[], i1=[], i2=[], dv=[], dvv;
		f1=parseFloat(document.getElementById('f1').value);
		w= 2*3.14159265358979*f1;
		r1[0]=parseFloat(document.getElementById('r1').value); r1[1]=0;
		r2[0]=parseFloat(document.getElementById('r2').value); r2[1]=0;
		r3[0]=parseFloat(document.getElementById('r3').value); r3[1]=0;
		c1[1]=(-1 / ((w * parseFloat(document.getElementById('c1').value)) * 0.000000001)); c1[0]=0; 
		lx1[1]=((w * parseFloat(document.getElementById('lx1').value))); lx1[0]=40.2000;  
		v1[0]=parseFloat(document.getElementById('v1').value); v1[1]=0; 
		
		z1=div(mult(r1,c1), add(r1,c1));
		la= (r2[0] * r3[0]) * parseFloat(document.getElementById('c1').value) * 0.000000001;
		ra= (r2[0] * r3[0]) / r1[0];
		qx= (w * la) / ra;
		i1= div(v1, add(z1,r3));
		i2= div(v1, add(r2,lx1));
		
		dv=add(mult(z1,i1),(mult([-1,0], mult(i2,r2))));
		dvv=(Math.sqrt((dv[0] * dv[0]) + (dv[1] * dv[1])))*1000;
		document.f1.A1.value= dvv;
		document.f1.A2.value= dvv;
		perform_meter();
	}





