
/////////////////////////////// The code starts from here/////////////////////////////////////
var sw=0;
var sw1,sw2;
var v, RA, RB, Ra, Rb, Rs,s,x,i,sc;
var imp=[];
function exe_ckt()
	{
		sc=0;
		if (sw==1)
		{
			v=parseFloat(document.getElementById('v1').value);
			RA=parseFloat(document.getElementById('RA').value);
			RB=parseFloat(document.getElementById('RB').value);
			Ra=parseFloat(document.getElementById('Ra').value);
			Rb=parseFloat(document.getElementById('Rb').value);
			Rs=parseFloat(document.getElementById('Rs').value);
			x=parseFloat(document.getElementById('x').value);
			s=parseFloat(document.getElementById('s').value);
			i=v/Rs;
			sw1=parseFloat(document.getElementById('sw1').value);
			sw2=parseFloat(document.getElementById('sw2').value);
			if (sw1==1)
			{
				document.f1.A2.value = i;
				document.f1.A1.value = 0; perform_meter1(); perform_meter2();
			}
			else if (sw1==2)
			{
				document.f1.A2.value = 0; document.f1.A1.value = 0; perform_meter1(); perform_meter2();
			}
			else if (sw1==3 && sw2==1)
			{
				var t = RA+RB;
				var p = s+x+Ra+Rb;
				var v1 = ((p/(t+p))*RB) / t;
				var v2 = ((t/(t+p))*(RB+x)) / p;
				document.f1.A1.value = v1-v2;
				document.f1.A2.value = i;
				perform_meter1(); perform_meter2();
			}
			else if (sw1==3 && sw2==2)
			{
				var c = 1;
				var t = (((Ra+Rb)*c)/(Ra+Rb+c));
				var i1 = i*((s+t+x)/(s+t+x+RA+RB));
				var i2 = i*((RA+RB)/(s+t+x+RA+RB));
				var v1 = i1*RA;
				var ip = i2*(c/(Ra+Rb+c));
				var v2 = (i2*s)+(ip*Ra);
				sc = s*(Ra/Rb);
				document.f1.A1.value = v1-v2;
				document.f1.A2.value = i;
				perform_meter1(); perform_meter2();
			}
			else
			{
				document.f1.A2.value = 0; document.f1.A1.value = 0; perform_meter1(); perform_meter2();
			}
		}
		else
		{
			document.f1.A2.value = 0; document.f1.A1.value = 0; perform_meter1(); perform_meter2();
		}
	}

function changeImage() 
{
		var image = document.getElementById('myImage');
		var im1= document.getElementById('v1');
		var im2= document.getElementById('pr1');
		sw1=parseFloat(document.getElementById('sw1').value);
		if (image.src.match("s1")) 
		{
			sw=1;
			image.src = "./images/s2.png"; 
			im1.setAttribute('readonly', 'readonly'); im2.setAttribute('readonly', 'readonly'); 
			if (sw1==1 || sw1==3)
			{
				exe_ckt();
			}
			else
			{
				document.f1.A2.value = 0; document.f1.A1.value = 0; perform_meter1(); perform_meter2();
			}
		} 
		else 
		{
			sw=0;
			image.src = "./images/s1.png"; 
			im1.removeAttribute('readonly'); im2.removeAttribute('readonly'); 
			document.f1.A2.value = 0; document.f1.A1.value = 0; perform_meter1(); perform_meter2();
		}
}
function cal_r()
{
	exe_ckt();
	if (sc==0)
	{
		Alert.render('First execute the circuit according to the procedure.');
	}
	else
	{
		document.f1.sc.value = sc;
	}
}



