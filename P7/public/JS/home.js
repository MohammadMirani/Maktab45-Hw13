$.ajax({
  type: "GET",
  url: "/pages/getCars",
  success: function (response) {
    carsList = response;
    createList(response);
  },
});

function createList(cars) {
  let html = "";
  for (const car of cars) {
    html += `<div class="col-lg-4"> 
                    <div class="card m-2" >
                    <img src="${car.image}" class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">${car.name}</h5>
                    <p class="card-text">
                    company: ${car.company}
                    </p>
                    <p class="card-text">
                    year: ${car.produce}
                    </p>
                    <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick='modalFun(${car.id})' >More Details</a>
                    </div>
                </div>
        </div>`;
  }

  $(".cars").html(html);
}

function modalFun(carId) {
  let thisCar = carsList.find((el) => el.id === JSON.stringify(carId));
  console.log(thisCar);
  $("#exampleModalLabel").html(thisCar.name);
  let html = `
            <div class="mb-3 row">
            <img src="${thisCar.image}" class="card-img-top" alt="..." />
            </div>
            
            <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Name: </label>
            <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" value="${thisCar.name}">
            </div>
            </div>
            <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Company: </label>
            <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" value="${thisCar.company}">
            </div>
            </div>
            <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Color: </label>
            <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" value="${thisCar.color}">
            </div>
            </div>
            <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Price: </label>
            <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" value="${thisCar.price}">
            </div>
            </div>
            <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Year: </label>
            <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" value="${thisCar.produce}">
            </div>
            </div>`;

  $(".modal-body").html(html);
}
