const dataArray = [['Name', 'Age', 'Grade'],
                  ['Alice',13, 'A'],
                  ['Bob',12, 'B'],
                  ['Charlie', 14, 'A+'],
                  ['Dakota', 12, 'C'] 
                ];


function generateTable(){

      const headerRow = document.getElementById('headerRow');
      const tablebody = document.getElementById('tablebody');
      //foreach loop
      dataArray[0].forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);  
    });
    //for loop
    for (let i = 1; i < dataArray.length; i++){
     
      const row = dataArray[i];
      const tr = document.createElement('tr');
     
      //foreach loop
      row.forEach(data => {
          const td =document.createElement('td');
          td.textContent = data;
          tr.appendChild(td);
      });
    
      tablebody.appendChild(tr);

    }

}


//runs the actual function on load
generateTable();