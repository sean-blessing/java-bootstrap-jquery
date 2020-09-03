var thingsilike = [
{Id: 1, Desc:"Running", Why:"I feel better"},
{Id: 2, Desc:"Playing w/ my family", Why:"Makes me happy"},
{Id: 3, Desc:"Watch a movie", Why:"Relaxes me"}
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
	var id = thingsilike.length +1;
	var desc = $("#desc").val();
	var why = $("#why").val();
	var item = {Id: id, Desc: desc, Why: why};
	thingsilike.push(item);
	loadTable();
}

function loadTable() {
	console.log("Load table");
	var tbody = $("tbody");
	tbody.empty();
	for (var til of thingsilike) {
		var item = "<tr>";
		item += "<td>" + til.Id + "</td>";
		item += "<td>" + til.Desc + "</td>";
		item += "<td>" + til.Why + "</td>";
		item += "</tr>";
		tbody.append(item);
	}
}