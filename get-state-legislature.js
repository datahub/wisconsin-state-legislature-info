var legislatureInfo = [];
$("[id^=district]").each(function(index, person){
	var image = $(person).find('.picture').attr('src');
	var website = $($(person).find('a')[0]).attr('href');
	var name = $($(person).find('.info')[0]).find('strong a').text().split(',');
	var firstName = name[1];
	var lastName = name[0];
	var party = $($($(person).find('.info')[0]).find('small')[0]).text();
	var title = $($($(person).find('.info')[0]).find('span span')[0]).text();
	var district = $($($(person).find('.info')[0]).find('span small')[1]).text();
	var capitolAddress = $(person).find('.office').text().replace(/\r?\n|\r/g,'').replace(/Madison Office\:\s+/,'').trim();
	var phoneNumbers = $(person).find('.telephone').text().replace(/\r?\n|\r/g,'').replace(/Telephone\:\s+/,'').trim().split('(');
	var phoneOne = "("+phoneNumbers[1];
	var phoneTwo = (phoneNumbers.length > 2) ? "("+phoneNumbers[2] : '';
	var email = $(person).find('.email a').text();
	var votingAddress = $(person).find('.voting_address').text().replace(/\r?\n|\r/g,'').replace(/Voting Address\:\s+/,'').trim();
	var staff = $(person).find('.staff a').text().split('.gov').join('.gov | ').replace(/ \| $/,'');
	legislatureInfo.push({
		firstName: firstName,
		lastName: lastName,
		party: party,
		title: title,
		district: district,
		phoneOne: phoneOne,
		phoneTwo: phoneTwo,
		email: email,
		image: image,
		website: website,
		capitolAddress: capitolAddress,
		votingAddress: votingAddress,
		staff: staff
	});
});
copy(legislatureInfo);
