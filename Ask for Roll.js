(function ()
{
	function print2chat(type, dc, name, secret){
		if (!dc)
			dc = 10;
		let msg = "<span data-pf2-check=\"";
		msg += type;
		msg += "\" data-pf2-traits=\"";
		if (secret == 2)
			msg += "secret";
		msg += "\"data-pf2-label=\"\" data-pf2-dc=\"";
		msg += dc;
		msg += "\" data-pf2-show-dc=\"gm\">";
		msg += name;
		msg += "</span>";
		let chatMessageData = {
        user: game.user.id,
        speaker: ChatMessage.getSpeaker(),
        content: msg,
        type: CONST.CHAT_MESSAGE_TYPES.OTHER
        };
		ChatMessage.create(chatMessageData);
	}

new Dialog({
    title: "Ask for Roll",
    content: `
     <b>Select Type.</b>
     <form>
      <div class="form-group">
       <label>Type</label>
       <select id="roll-type">
        <option value="perception">Perception</option>
		<option value="fortitude">Fortitude</option>
		<option value="reflex">Reflex</option>
        <option value="will">Will</option>
		<option value="acrobatics">Acrobatics</option>
		<option value="arcana">Arcana</option>
		<option value="athletics">Athletics</option>
		<option value="crafting">Crafting</option>
		<option value="deception">Deception</option>
		<option value="diplomacy">Diplomacy</option>
		<option value="intimidation">Intimidation</option>
		<option value="medicine">Medicine</option>
		<option value="nature">Nature</option>
		<option value="occultism">Occultism</option>
		<option value="performance">Performance</option>
		<option value="religion">Religion</option>
		<option value="society">Society</option>
		<option value="stealth">Stealth</option>
		<option value="survival">Survival</option>
		<option value="thievery">Thievery</option>
       </select>
      </div>
      <div class="form-group">
       <label>DC</label>
       <input type="text" inputmode="numeric" pattern="\d*" id="custom-dc">
      </div>
	  <div class="form-group">
       <label>Name</label>
       <input type="text" id="name">
      </div>
     </form>
     `,
    buttons: {
      one: {
        icon: '<i class="fas fa-check"></i>',
        label: "Normal",
        callback: (html) =>
        {
          let type = html.find('[id=roll-type]')[0].value;
          let dc = parseInt(html.find('[id=custom-dc]')[0].value);
		  let name = html.find('[id=name]')[0].value;
          print2chat(type, dc, name, 1);
        }
      },
	  two: {
        icon: '<i class="fas fa-check"></i>',
        label: "Secret",
        callback: (html) =>
        {
          let type = html.find('[id=roll-type]')[0].value;
          let dc = parseInt(html.find('[id=custom-dc]')[0].value);
          let name = html.find('[id=name]')[0].value;
          print2chat(type, dc, name, 2);
        }
      },
      three: {
        icon: '<i class="fas fa-times"></i>',
        label: "Cancel",
      }
    },
    default: "Cancel"
  }).render(true);
})();