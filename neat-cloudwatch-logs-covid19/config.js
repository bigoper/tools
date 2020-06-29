var myButtons = [
	// General
	{
		text:"Warning+",
		type: "single",
		style: "btn-success",
		params: {type: "filter", value: `WARNING -"Auth Failed" -"Retrying with Fivetran default"`}
	},
	{
		text:"Severe",
		type: "single",
		style: "btn-danger",
		params: {type: "filter", value: "SEVERE"}
	},
	{
		text:"Status",
		type: "single",
		style: "btn-primary",
		params: {type: "filter", value: "Setting status"}
	},
	{
		text:"Saved state",
		type: "single",
		style: "btn-primary",
		params: {type: "filter", value: "Saved state"}
	},	
	{
		text:"Version",
		type: "single",
		style: "btn-warning",
		params: {type: "filter", value: "Running version"}
	},
	{
		text:"Sync Time",
		type: "single",
		style: "btn-warning",
		params: {type: "filter", value: '?"sync_start" ?"sync_end"'}
	},	
	{
		text:"Combo",		
		style: "btn-primary",
		type: "single",
		meta: [
			{key:"data-toggle", value:"modal"},
			{key:"data-target", value:"#exampleModal"}
		],
		params: {type: "filter", value: '?SEVERE ?WARNING ?"Setting status" ?"Progress" ?"Running version"'}
	},
	// Postgres
	{
		text:"Postgres",
		style: "btn-primary",
		type: "group",
		group: "postgres-1",
		placeholder: "-placeholder",
		data: [
			{
				text:"PostgresShortenWalNeglectHours",
				style: "",
				params: {type: "filter", value: "PostgresShortenWalNeglectHours"}
			},
			{
				text:"PostgresLongFirstChange",
				style: "",
				params: {type: "filter", value: "PostgresLongFirstChange"}
			},
			{
				text:"PostgresStreamingLongTimeout",
				style: "",
				params: {type: "filter", value: "PostgresStreamingLongTimeout"}
			},			
			{
				text:"Doing logical replication",
				style: "",
				params: {type: "filter", value: `"Doing logical replication"`}
			},
			{
				text:"Combo",
				style: "covid19-success",
				params: {type: "filter", value: `?"Doing logical replication" ?"PostgresLongFirstChange" ?"PostgresStreamingLongTimeout" ?"PostgresShortenWalNeglectHours"`}
			}
		]
		
	},
	// Oracle
	{
		text:"Oracle",
		style: "btn-primary",
		type: "group",
		group: "oracle-1",
		placeholder: "-placeholder",
		data: [
			{
				text:"uncommitted_txn_alert",
				style: "",
				params: {type: "filter", value: "uncommitted_txn_alert"}
			},
			{
				text:"timestamp_to_scn",
				style: "",
				params: {type: "filter", value: "timestamp_to_scn"}
			},
			{
				text:"writeCommittedRows",
				style: "",
				params: {type: "filter", value: "writeCommittedRows"}
			},			
			{
				text:"writeCommittedRows",
				style: "",
				params: {type: "filter", value: `writeCommittedRows`}
			},
			{
				text:"changedRowsChunk",
				style: "",
				params: {type: "filter", value: `changedRowsChunk`}
			},
			{
				text:"Combo",
				style: "covid19-success",
				params: {type: "filter", value: `?"Doing logical replication" ?"PostgresLongFirstChange" ?"PostgresStreamingLongTimeout" ?"PostgresShortenWalNeglectHours"`}
			}
		]
		
	},
	// API
	{
		text:"API",
		style: "btn-primary",
		type: "group",
		group: "rest-api-1",
		placeholder: "-placeholder",
		data: [
			{
				text:"HTTP",
				style: "",
				params: {type: "filter", value: "HTTP"}
			},
			{
				text:"api_call",
				style: "",
				params: {type: "filter", value: "api_call"}
			},
			{
				text:"Encryption Details",
				style: "",
				params: {type: "filter", value: '?"Encryption Details" ?"Encrypted request"'}
			},
			{
				text:"updateEndpoint",
				style: "covid19-success",
				params: {type: "filter", value: "updateEndpoint"}
			},
			{
				text:"flushBuffers",
				style: "covid19-success",
				params: {type: "filter", value: "flushBuffers"}
			}			
		]
		
	},
	// Marketo
	{
		text:"Marketo",
		style: "btn-primary",
		type: "group",
		group: "marketo-1",
		placeholder: "-placeholder",
		data: [
			{
				text:"API calls available",
				style: "",
				params: {type: "filter", value: "API calls available"}
			},
			{
				text:"Api usage stat from Marketo",
				style: "",
				params: {type: "filter", value: "Api usage stat from Marketo"}
			},
			{
				text:"Combo",
				style: "btn-primary",
				params: {type: "filter", value: `?"Api usage stat from Marketo" ?"API calls available"`}
			}
		]
		
	},
	// BrainTree
	{
		text:"BrainTree",
		style: "btn-primary",
		type: "group",
		group: "braintree-1",
		placeholder: "-placeholder",
		data: [
			{
				text:"BraintreeApi-Next",
				style: "",
				params: {type: "filter", value: '"BraintreeApi$3#next"'}
			},
			{
				text:"fetchInprogressTransactions",
				style: "",
				params: {type: "filter", value: "fetchInprogressTransactions"}
			},
			{
				text:"BraintreeUpdater",
				style: "",
				params: {type: "filter", value: "BraintreeUpdater"}
			},
			{
				text:"tryStartWriting",
				style: "",
				params: {type: "filter", value: "tryStartWriting"}
			}			
		]
		
	},
	// Redshift
	{
		text:"Redshift",
		style: "btn-primary",
		type: "group",
		group: "redshift-1",
		placeholder: "-placeholder",
		data: [
			{
				text:"Setting max redshift concurrency",
				style: "",
				params: {type: "filter", value: 'Setting max redshift concurrency'}
			}
		]
		
	},
	// Salesforce
	{
		text:"Salesforce",
		style: "btn-primary",
		type: "group",
		group: "salesforce-1",
		placeholder: "-placeholder",
		data: [
			{
				text:"skip_column",
				style: "",
				params: {type: "filter", value: 'skip_column'}
			},
			{
				text:"Duplicate Column",
				style: "",
				params: {type: "filter", value: '"Duplicate Column'}
			},
			{
				text:"performSoftDeleteAndHardDelete",
				style: "",
				params: {type: "filter", value: '"performSoftDeleteAndHardDelete'}
			},
			{
				text:"softDelete",
				style: "",
				params: {type: "filter", value: 'softDelete'}
			},
			{
				text:"todoQueue",
				style: "",
				params: {type: "filter", value: 'todoQueue'}
			},
			{
				text:"not_configured",
				style: "",
				params: {type: "filter", value: 'not_configured'}
			}
				
		]
		
	}
]
/**
PLACEJHOLDER
------------------------------------

- REDSHIFT
	- Setting max redshift concurrency = 8

- BRAINTREE
	- BraintreeApi$3#next
	- fetchInprogressTransactions

*/







