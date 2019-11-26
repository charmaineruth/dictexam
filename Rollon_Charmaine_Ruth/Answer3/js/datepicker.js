var j$= jQuery;

j$(document).ready(function(){
	j$(".datepicker-1").bootstrapMaterialDatePicker({ 
		weekStart : 0, 
		time: false,
		format: 'DD/MM/YYYY',
		clearButton: true
	});	
	
	j$(".datepicker-2").bootstrapMaterialDatePicker({ 
		weekStart : 0, 
		time: false,
		format: 'DD/MM/YYYY',
		minDate: new Date(),
		clearButton: true
	});	

	j$(".datepicker-3").bootstrapMaterialDatePicker({ 
		weekStart : 0, 
		time: false,
		format: 'DD/MM/YYYY',
		maxDate: new Date(),
		clearButton: true
	});	
	
});
