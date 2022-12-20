from flask import Flask, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

# ? To connect to storage solution
f = open("../src/MemberModel.json")
listMembers = json.load(f)
f.close()
# ?

@app.route('/users', methods=['GET'])
def get_users_in_group():
	newMemberList = []
	args = request.args
	group = args.get('group')
	
	if (group is None):
		return listMembers
	
	for member in listMembers:
		if (member['group'] == group):
			newMemberList.append(member)
	newMemberList = json.dumps(newMemberList)

	return (newMemberList)

app.run()