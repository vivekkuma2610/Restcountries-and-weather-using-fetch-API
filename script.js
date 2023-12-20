const data=fetch("https://restcountries.com/v3.1/all").then((response)=>response.json()).then((result)=>printData(result)).catch((err)=>console.log(err));
const container=document.getElementById('container');
const arr=[];
function printData(result){
    result.map((d)=>{
        // console.log(d.latlng);
    //     const rowDiv=document.createElement('div');
    //     rowDiv.setAttribute("class","row col-lg-4 col-sm-12 me-2")
    //    const cardDiv= document.createElement('div');
    //    cardDiv.setAttribute("class","card p-2 my-2")
    //     const headerDiv=document.createElement('div');
    //     headerDiv.setAttribute("class","card-header text-center bg-black text-white");
    //     headerDiv.innerHTML=d.name.common;
    //     cardDiv.appendChild(headerDiv);
    //     rowDiv.appendChild(cardDiv);

        const value=`<div class="row col-lg-4 col-sm-12">
        <div class="card">
          <div class="card-header text-center bg-black text-white">
            ${d.name.common}
          </div>
          <div class="card-body text-center ">
            <img src=${d.flags.png} width="80%" height="70%"/>
            <div class="capital text-center text-white pt-3">
              Captial: ${d.capital}
            </div>
            <div class="region text-center text-white">
                Region:${d.region}
            </div>
            <div class="code text-center text-white">
                Country Code:${d.cca3}
            </div>
          </div>
          <a  href="https://api.open-meteo.com/v1/forecast?latitude=${d.latlng[0]}&longitude=${d.latlng[1]}&current_weather=true" class="btn btn-primary">
          Click for Weather</a>
          
        </div>
    </div>`
    arr.push(value);
    

    }
    );

    container.innerHTML=arr;
}

