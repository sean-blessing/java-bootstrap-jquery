var fflist = [
// {Id: 1, Desc:"Running", Why:"I feel better"},
// {Id: 2, Desc:"Playing w/ my family", Why:"Makes me happy"},
// {Id: 3, Desc:"Watch a movie", Why:"Relaxes me"}
];

$().ready(function() {
	console.log("It worked.");
	loadTable();

	$("button").click(function() {
		addItem();
	});
});

function addItem() {
	console.log("Add Item");
	var id = fflist.length +1;
	var fname = $("#fname").val();
	var lname = $("#lname").val();
	var years = $("#years").val();
	var rel = $("#rel").val();
	var item = {Id: id, FirstName: fname, LastName: lname, Years: years, Relationship: rel};
	fflist.push(item);
	loadTable();
}

function loadTable() {
	console.log("Load table");
	var tbody = $("tbody");
	tbody.empty();
	for (var ff of fflist) {
		var item = "<tr>";
		item += "<td>" + ff.Id + "</td>";
		item += "<td>" + ff.FirstName + "</td>";
		item += "<td>" + ff.LastName + "</td>";
		item += "<td>" + ff.Years + "</td>";
		item += "<td>" + ff.Relationship + "</td>";
		item += "</tr>";
		tbody.append(item);
	}
}