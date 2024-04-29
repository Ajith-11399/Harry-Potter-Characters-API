function element(tag, className, id, text) {
  const tags = document.createElement(tag);
  tags.id = id;
  tags.classList = className;
  tags.innerHTML = text;
  return tags;
}

const container = element("div", "container", "", "");
const h1 = element(
  "h1",
  "text-center mt-5 mb-5",
  "title",
  "Database - The Wizarding World"
);
const row = element("div", "row", "", "");

const api = fetch("https://hp-api.onrender.com/api/characters");
api
  .then((data) => data.json())
  .then((ele) => {
    for (let i = 0; i < ele.length; i++) {
      const box = document.createElement("div");
      box.classList = "col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-3 mb-2";
      box.innerHTML = `
        <div class="card">
            <div class="card-header bg-primary">
                <h5 class="text-center text-white pt-2">${ele[i].name}</h5>
            </div>
            <div class="img-box mb-3">
                <img class="card-img-top" src="${ele[i].image}" alt="">
            </div>
            <div class="card-body">
                <table class="table table-bordered border-primary">
                    <thead>
                        <tr>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">House</th>
                            <td>${ele[i].house}</td>
                        </tr>
                        <tr>
                            <th scope="row">Date of Birth</th>
                            <td>${ele[i].dateOfBirth}</td>
                        </tr>
                        <tr>
                            <th scope="row">Gender</th>
                            <td>${ele[i].gender}</td>
                        </tr>
                        <tr>
                            <th scope="row">Ancestry</th>
                            <td>${ele[i].ancestry}</td>
                        </tr>
                        <tr>
                            <th scope="row">Wand Wood</th>
                            <td>${ele[i].wand.wood}</td>
                        </tr>
                        <tr>
                            <th scope="row">Wand Core</th>
                            <td>${ele[i].wand.core}</td>
                        </tr>
                        <tr>
                            <th scope="row">Patronous</th>
                            <td>${ele[i].patronous}</td>
                        </tr>
                        <tr>
                            <th scope="row">Role potrayed by</th>
                            <td>${ele[i].actor}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        `;
      row.appendChild(box);
    }
  });
container.appendChild(h1);
container.appendChild(row);
document.body.append(container);