var pheader = '<tr class="header">          <td><a href="javascript:sort(&quot;name&quot;, arr)">Name</a></td>          <td><a href="javascript:sort(&quot;team&quot;, arr)">Team</a></td>          <td><a href="javascript:sort(&quot;POS&quot;, arr)">Position</a></td>          <td><a href="javascript:sort(&quot;gp&quot;, arr)">Games Played</a></td>          <td><a href="javascript:sort(&quot;recs&quot;, arr)">Receptions</a></td>          <td><a href="javascript:sort(&quot;yards&quot;, arr)">Yards</a></td>          <td><a href="javascript:sort(&quot;rectuddies&quot;, arr)">Reception TDs</a></td>          <td><a href="javascript:sort(&quot;rushtuddies&quot;, arr)">Rush TDs</a></td>        </tr>'
var theader = '<tr class="header"> <td><a href="javascript:Tsort(&quot;name&quot;, arr)">Name</a></td> <td><a href="javascript:Tsort(&quot;div&quot;, arr)">Division</a></td></tr>'
var currpos;

function updateTable(pos, data, string){
  var table = document.getElementById("table");
  table.innerHTML = pheader;
  currpos = pos;
  if(pos == 'all'){
    data.forEach(function(Player) {
      if(Player.name != 'name'){
        var tr = document.createElement("tr");
        tr.innerHTML = "<tr>          <td>" + Player.name + "</td>          <td>" + Player.team + "</td>          <td>" + Player.POS + "</td>          <td>" + Player.gp + "</td>          <td>" + Player.recs + "</td>          <td>" + (Player.rushyards + Player.recyards)  + "</td>          <td>" + Player.rectuddies + "</td>          <td>" + Player.rushtuddies + "</td>        </tr>";
        table.appendChild(tr);
      }
    });
  }else if(pos == 'FLEX'){
    data.forEach(function(Player) {
      if(Player.POS == 'WR' || Player.POS == 'RB'){
        var tr = document.createElement("tr");
        tr.innerHTML = "<tr>          <td>" + Player.name + "</td>          <td>" + Player.team + "</td>          <td>" + Player.POS + "</td>          <td>" + Player.gp + "</td>          <td>" + Player.recs + "</td>          <td>" + (Player.rushyards + Player.recyards)  + "</td>          <td>" + Player.rectuddies + "</td>          <td>" + Player.rushtuddies + "</td>        </tr>";
        table.appendChild(tr);
      }
    });
  }else{
    data.forEach(function(Player) {
      if(Player.POS == pos){
        var tr = document.createElement("tr");
        tr.innerHTML = "<tr>          <td>" + Player.name + "</td>          <td>" + Player.team + "</td>          <td>" + Player.POS + "</td>          <td>" + Player.gp + "</td>          <td>" + Player.recs + "</td>          <td>" + (Player.rushyards + Player.recyards)  + "</td>          <td>" + Player.rectuddies + "</td>          <td>" + Player.rushtuddies + "</td>        </tr>";
        table.appendChild(tr);
      }
    });
  }
} 

function updateTTable(data, string){
  var table = document.getElementById("table");
  console.log(string);
  table.innerHTML = theader;
  data.forEach(function(Team) {
    if(Team.name != 'name'){
      var tr = document.createElement("tr");
      tr.innerHTML = "<tr>          <td>" + Team.name + "</td>          <td>" + Team.div + "</td>";
      table.appendChild(tr);
    }
  });
} 

function searchPlayer(data){
  var name = document.getElementById("playerSearch").value;
  var table = document.getElementById("table");
  // table.innerHTML = '<tr class="header">          <td>Name</td>          <td>Team</td>          <td>Position</td>          <td>Games Played</td>          <td>Receptions</td>          <td>Reception TDs</td>          <td>Rush TDs</td>          </tr>';
  table.innerHTML = header;
  data.forEach(function(Player) {
    if(Player.name == name){
      var tr = document.createElement("tr");
      tr.innerHTML = "<tr>          <td>" + Player.name + "</td>          <td>" + Player.team + "</td>          <td>" + Player.POS + "</td>          <td>" + Player.gp + "</td>          <td>" + Player.recs + "</td>          <td>" + (Player.rushyards + Player.recyards)  + "</td>          <td>" + Player.rectuddies + "</td>          <td>" + Player.rushtuddies + "</td>        </tr>";
      table.appendChild(tr);
    }
  });
}

function searchTeam(data){
  var name = document.getElementById("teamSearch").value;
  var table = document.getElementById("table");
  table.innerHTML = header;
  data.forEach(function(Player) {
    if(Player.team == name){
      var tr = document.createElement("tr");
      tr.innerHTML = "<tr>          <td>" + Player.name + "</td>          <td>" + Player.team + "</td>          <td>" + Player.POS + "</td>          <td>" + Player.gp + "</td>          <td>" + Player.recs + "</td>          <td>" + (Player.rushyards + Player.recyards)  + "</td>          <td>" + Player.rectuddies + "</td>          <td>" + Player.rushtuddies + "</td>        </tr>";
      table.appendChild(tr);
    }
  });
}

function sort(param, data, string){
  //sort by name
  if(param == 'name'){
    data.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
  //sort by team
  if(param == 'team'){
    data.sort(function (a, b) {
      if (a.team > b.team) {
        return 1;
      }
      if (a.team < b.team) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
  //sort by POS
  if(param == 'POS'){
    data.sort(function (a, b) {
      if (a.POS > b.POS) {
        return 1;
      }
      if (a.POS < b.POS) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
  // sort by games played
  if(param == 'gp'){
    data.sort(function (a, b) {
      if (a.gp > b.gp) {
        return 1;
      }
      if (a.gp < b.gp) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
  // sort by receptions
  if(param == 'recs'){
    data.sort(function (a, b) {
      if (a.recs > b.recs) {
        return 1;
      }
      if (a.recs < b.recs) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
  // sort by yards
  if(param == 'yards'){
    data.sort(function (a, b) {
      if ((a.rushyards + a.recyards) > (b.rushyards + b.recyards)) {
        return 1;
      }
      if ((a.rushyards + a.recyards) < (b.rushyards + b.recyards)) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
  // sort by rectuddies
  if(param == 'rectuddies'){
    data.sort(function (a, b) {
      if (a.rectuddies > b.rectuddies) {
        return 1;
      }
      if (a.rectuddies < b.rectuddies) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
  // sort by rushtuddies
  if(param == 'rushtuddies'){
    data.sort(function (a, b) {
      if (a.rushtuddies > b.rushtuddies) {
        return 1;
      }
      if (a.rushtuddies < b.rushtuddies) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }

  updateTable(currpos, data, string);
}

function Tsort(param, data, string){
  //sort by name
  if(param == 'name'){
    data.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
  //sort by div
  if(param == 'div'){
    data.sort(function (a, b) {
      if (a.div > b.div) {
        return 1;
      }
      if (a.div < b.div) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
  updateTTable(data, string);
}