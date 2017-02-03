var senInfo = [];
$("[id^=district]").each(function(index,senator){
	var image = $(senator).find('.picture').attr('src');
	var website = $($(senator).find('a')[0]).attr('href');
	var name = $($(senator).find('.info')[0]).find('strong a').text().split(',');
	var firstName = name[1];
	var lastName = name[0];
	var party = $($($(senator).find('.info')[0]).find('small')[0]).text();
	var title = $($($(senator).find('.info')[0]).find('span span')[0]).text();
	var district = $($($(senator).find('.info')[0]).find('span small')[1]).text();
	var capitolAddress = $(senator).find('.office').text().replace(/\r?\n|\r/g,'').trim();
	var phoneNumbers = $(senator).find('.telephone').text().replace(/\r?\n|\r/g,'').replace(/Telephone\:\s+/,'').trim().split('(');
	var phoneOne = phoneNumbers[1].replace('\)|\s|-','')
	var phoneTwo = (phoneNumbers.length > 2) ? phoneNumbers[2].replace('\)|\s|-','') : '';
	var email = $(senator).find('.email a').text();
	var votingAddress = $(senator).find('.voting_address').text().replace(/\r?\n|\r/g,'').replace(/Voting Address\:\s+/,'').trim();
	var staff = $(senator).find('.staff a').text().split('.gov').join('.gov | ').replace(/ \| $/,'');
	senInfo.push({
		firstName: firstName,
		lastName: lastName,
		image: image,
		website: website,
		party: party,
		district: district,
		capitolAddress: capitolAddress,
		phoneOne: phoneOne,
		phoneTwo: phoneTwo,
		email: email,
		votingAddress: votingAddress,
		staff: staff
	});
});
copy(senInfo);
