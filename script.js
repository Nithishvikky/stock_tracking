var apikey = 'PIX32TME9I2CQJJ6';
const search = document.getElementById('search');
function getdata(){
    var inputval= document.getElementById("search").value;
    var inputDate = document.getElementById("date").value;
    var inputMonth = document.getElementById("month").value;
    var inputYear = document.getElementById("year").value;
    var inputDate2 = inputDate-1;
    var inputDate3 = inputDate2-1;
    if(inputDate2<=9 && inputDate2>0){
    inputDate2 = "0"+inputDate2;
    inputDate3 = "0"+inputDate3;
    }
    
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${inputval}&apikey=${apikey}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const firstDate = data["Time Series (Daily)"][`${inputYear}-${inputMonth}-${inputDate}`];
       
        document.getElementById("p1").innerHTML = firstDate["1. open"]; 
        document.getElementById("p2").innerHTML = firstDate["4. close"];
        document.getElementById("p3").innerHTML = firstDate["2. high"];
        document.getElementById("p4").innerHTML = firstDate["4. close"];
        document.getElementById("p5").innerHTML = firstDate["5. volume"];
        document.getElementById("firDate").innerHTML = inputDate+"-"+inputMonth+"-"+inputYear;
        const secondDate = data["Time Series (Daily)"][`${inputYear}-${inputMonth}-${inputDate2}`];
       
        document.getElementById("p11").innerHTML = secondDate["1. open"];
        document.getElementById("p12").innerHTML = secondDate["4. close"];
        document.getElementById("p13").innerHTML = secondDate["2. high"];
        document.getElementById("p14").innerHTML = secondDate["4. close"];
        document.getElementById("p15").innerHTML = secondDate["5. volume"];
        document.getElementById("secDate").innerHTML = inputDate2+"-"+inputMonth+"-"+inputYear;
        const thirdDate = data["Time Series (Daily)"][`${inputYear}-${inputMonth}-${inputDate3}`];
        
        document.getElementById("p21").innerHTML = thirdDate["1. open"];
        document.getElementById("p22").innerHTML = thirdDate["4. close"];
        document.getElementById("p23").innerHTML = thirdDate["2. high"];
        document.getElementById("p24").innerHTML = thirdDate["4. close"];
        document.getElementById("p25").innerHTML = thirdDate["5. volume"];
        document.getElementById("thiDate").innerHTML = inputDate3+"-"+inputMonth+"-"+inputYear;
    })

    const url1 = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${inputval}&apikey=${apikey}`;
    fetch(url1)
    .then(response => response.json())
    .then(data => {
    document.getElementById("Current").innerHTML ="Stock Prices In "+data.Currency;
    document.getElementById("name").innerHTML = data.Name;
    document.getElementById("symbol").innerHTML ="Symbol : " + data.Symbol;
    document.getElementById("assettype").innerHTML ="AssetType : " + data.AssetType;
    document.getElementById("description").innerHTML ="Description : " + data.Description;
    document.getElementById("Country").innerHTML ="Country : " + data.Country;
    document.getElementById("Currency").innerHTML ="Currency : " + data.Currency;
    document.getElementById("Exchange").innerHTML ="Exchange : " + data.Exchange;
    document.getElementById("Sector").innerHTML ="Sector : " + data.Sector;
    document.getElementById("Industry").innerHTML ="Industry : " + data.Industry;
    document.getElementById("Address").innerHTML ="Address : " + data.Address;
    document.getElementById("MarketCapitalization").innerHTML ="MarketCapitalization : " + data.MarketCapitalization;
    document.getElementById("SharesOutstanding").innerHTML ="SharesOutstanding : " + data.SharesOutstanding;
})

}