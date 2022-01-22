document.querySelector('#copyright').textContent = new Date().getFullYear();

function getTotal() {
	// INPUT
	 let q1 = 0;
	 let p1 = 0; 
     let q2 = 0;
     let p2 = 0;
     let q3 = 0;
     let p3 = 0;
     let disc = 0; 
     let tax = 0;

     q1 = q1 + parseFloat(document.querySelector('#q1').value);
     p1 = p1 + parseFloat(document.querySelector('#p1').value);
     q2 = q2 + parseFloat(document.querySelector('#q2').value);
     p2 = p2 + parseFloat(document.querySelector('#p2').value);
     q3 = q3 + parseFloat(document.querySelector('#q3').value);
     p3 = p3 + parseFloat(document.querySelector('#p3').value);
     disc = disc + parseFloat(document.querySelector('#discount').value);
     tax = 1 + parseFloat(document.querySelector('#tax').value);
    	
	// PROCESSING
	 let price = 0;
     let discount = 0;
     price = (q1 * p1) + (q2 * p2) + (q3 * p3);
     discount = price * disc;
     price = (price - discount) * tax;
	
	//OUTPUT
    document.querySelector('#output').innerHTML = 'Total Due: $' + price.toFixed(2);
}