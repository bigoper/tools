// (function() {
	"use strict";

	var UrlHelper = (function() {
		var setParameter = function(name, value) {
			var url = window.location.href;

			var regex = new RegExp(";?" + name + "=.*?(;|$)");
			var newUrl = url.replace(regex, "$1");

			window.location.href = newUrl + ";" + name + "=" + value;
		};

		return {
			setParameter: setParameter
		};
	})();

	var addButton = function($toolbar, item, clickHandler) {
		var css = "btn-" + item.text.toLowerCase().replace(" ", "-");
		// var css = ".btn-" + item.text.toLowerCase().replace(" ", "-");

		var $button = $("<button>")
	            .addClass("btn")
	            .addClass("btn-sm")
	            .addClass(item.style)
			    .addClass(css)						    
				.text(item.text)
				.click(clickHandler);

			if (item.meta) {

				var meta = item.meta
				meta.forEach(function(item, index) {
					// console.log("META", item.key, item.value);		
					$button.attr(item.key, item.value);
				});				
			}			

		// console.log('$toolbar', $toolbar);

		var $buttonGroup = $toolbar.find(".btn-group");
		// console.log('$buttonGroup', $buttonGroup);

		if(!$buttonGroup.has(css).length) {
			$buttonGroup.append($button);
		}
	};

	var addButtonV2 = function($toolbar, item, group, clickHandler) {
		var css = "btn-" + item.text.toLowerCase().replace(" ", "-");

		var $button = $("<a>")
		                    .addClass("dropdown-item")
		                    .addClass(item.style)
						    .addClass(css)						    
							.text(item.text)
							.click(clickHandler);

			if (item.meta) {

				var meta = item.meta
				meta.forEach(function(item, index) {
					$button.attr(item.key, item.value);
				});				
			}			

		console.log('group', group);

		var $buttonGroup = $toolbar.find(group);
		console.log('$buttonGroup', $buttonGroup);

		if(!$buttonGroup.has(css).length) {
			$buttonGroup.append($button);
		}

	};

	var addButtonDropDown = function($toolbar, item, clickHandler) {
		var css = "btn-" + item.text.toLowerCase().replace(" ", "-");
		// var css = ".btn-" + item.text.toLowerCase().replace(" ", "-");

		var $button = $("<a>")
		                    .addClass("btn")		                    
		                    .addClass("btn-sm")
		                    .addClass("dropdown-item")
		                    .addClass(item.style)
						    .addClass(css)						    
							.text(item.text)
							.click(clickHandler);

			if (item.meta) {

				var meta = item.meta
				meta.forEach(function(item, index) {
					// console.log("META", item.key, item.value);		
					$button.attr(item.key, item.value);
				});				
			}			

		var $buttonGroup = $toolbar.find(".dropdown-menu");

		if(!$buttonGroup.has(css).length) {
			$buttonGroup.append($button);
		}
	};

	// EXAMPLE (old style)
	var addRecordsModifiedButton = function($toolbar) {
		addButton($toolbar, "Records-Modified", function() {
			UrlHelper.setParameter("filter", "records_modified");
		});
	};

	// TOOLS
	// returns the $toolbar object :)
	var trackElement = function(selector, handler) {
		var CHECK_INTERVAL = 400;

		var checkElement = function() {
			var $element = $(selector);

			if($element.length && !$element.data("AUTO_HANDELED")) {
				$element.data("AUTO_HANDELED", true);
				handler($element);
			}

			setTimeout(function() {
				checkElement();
			}, CHECK_INTERVAL);
		};

		checkElement();
	};

	var attachTimeClickHandler = function($table) {
		var findDateRow = function($row) {
			var $result;

			var $rows = $row.add($row.prevAll(".cwdb-log-viewer-table-row-group"));

			$($rows.get().reverse()).each(function() {
				var $dateRow = $(this).find(".cwdb-log-viewer-table-row-date-separator");

				if($dateRow.length) {
					$result = $dateRow;
					return false;
				}
			});

			return $result || $table.find(".cwdb-log-viewer-table-subheader-column-date:first");
		};

		var getTimeZoneInMins = function() {
			var tableHeaderText = $(".cwdb-log-viewer-table-header").text();
			var matches = tableHeaderText.match(/\(UTC (\+|-)(\d\d)\:(\d\d)\)/);

			if(!matches || matches.length < 4)
				return 0;

			var sign = (matches[1] === "-" ? +1 : -1);
			var hours = parseInt(matches[2], 10);
			var mins = parseInt(matches[3], 10);

			return sign * (hours * 60 + mins);
		};

		var getDateTimeUTC = function(date, time) {
			var result = new Date(date + "T" + time + "Z");

			var timeZoneInMins = getTimeZoneInMins();

			return new Date(result.getTime() + timeZoneInMins*60000);
		};

		$table.on("click", ".cwdb-log-viewer-table-column-time", function(e) {
			var $timeCell = $(this);
			var $row = $timeCell.parent().parent();
			var $dateRow = findDateRow($row);

			var time = $timeCell.text().trim();
			var date = $dateRow.text().trim();

			UrlHelper.setParameter("start", getDateTimeUTC(date, time).toISOString());
		});
	};

	function createDropDownList(datarecord, idx) {
	  return `
	    <div class="btn-group ${datarecord.group}">
		  <button 
		  		class="btn btn-secondary dropdown-toggle ${datarecord.style}" 
		  		type="button" 
		  		id="dropdownMenuButton"
		  		data-toggle="dropdown" 
		  		aria-haspopup="true" 
		  		aria-expanded="false">${datarecord.text}</button>
		  <div class="dropdown-menu ${datarecord.group}-placeholder" aria-labelledby="dropdownMenuButton">\
		  </div>\
		</div>\
	  `;
	}

	trackElement(".cwdb-log-viewer-toolbar-buttons", function($toolbar) {
	
		myButtons.forEach((btn, idx) => {			

			if (btn.type === "single") {				
				console.log("single", btn.text);
				addButton($toolbar, btn, function() {
					UrlHelper.setParameter(btn.params.type, btn.params.value);
				});
			} else {
				// generate a dropdown list HTML
				var myDropDownList = createDropDownList(btn);

				// append to toolbar
				$toolbar.append(myDropDownList);

				// build the locator
				var s_locator = `.${btn.group}${btn.placeholder}`;
				var $locator = $(s_locator);

				// add buttons (links) to it
				var btns = btn.data;

				// loop all buttons for this group
				btns.forEach((b, i) => {
					addButtonV2($toolbar, b, $locator, function() {
						UrlHelper.setParameter(b.params.type, b.params.value);
					});
				});
			}

		});

	});

	trackElement(".cwdb-log-viewer-table", function($table) {
		attachTimeClickHandler($table);
	});	

// })();