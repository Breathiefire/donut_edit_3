var store = function(hrOfOpp, minCustHr, maxCustHr, donutPerCust) {
                				this.hour = hrOfOpp;
                                this.min = minCustHr;
                                this.max = maxCustHr;
                                this.donut = donutPerCust; 
                                this.donutForEachHr = [];
                                this.donutForDay = 0
                                this.total = function() {
                                    for (var hr = 1; hr <= this.hour; hr++) {
                                        var donutPerHr = this.getRandomArbitrary() * this.donut;
                                        this.donutForDay += donutPerHr;
                                        this.donutForEachHr.push(donutPerHr);
                                        console.log(donutPerHr + " are the donuts per hour.");
                                       
                                        
                                }
                                    
                                    console.log(this.donutForDay + " are the donuts per day.");
                                    
                                   
                                    
                                }
                               
                                this.getRandomArbitrary = function() {
                                    return Math.floor(Math.random() * (this.max - this.min)) + this.min;
                                }
                                
                				    }
                				
                		  	var Downtown = new store(8, 8, 43, 4.5);
                            var CapitolHill  = new store(24, 4, 37, 2);
                            var SouthLakeUnion = new store(10, 9, 23, 6.33);
                            var Wedgewood = new store(7, 2, 28, 1.25);
                            var Ballard = new store(10, 8, 58, 3.75); 
                            Downtown.total();
                            CapitolHill.total();
                            SouthLakeUnion.total();
                            Wedgewood.total();
                            Ballard.total();




                            $(document).ready(function(){
                                $("#downtown").click(function() {
                                    $('.dhourday').css({"color":"white"});
                                    });
                            });

                           $(document).ready(function(){
                                $("#capital").click(function() {
                                    $('.chourday').css({"color":"white"});
                                    });
                            });

                           $(document).ready(function(){
                                $("#south").click(function() {
                                    $('.shourday').css({"color":"white"});
                                    });
                            });

                           $(document).ready(function(){
                                $("#wedge").click(function() {
                                    $('.whourday').css({"color":"white"});
                                    });
                            });

                            $(document).ready(function(){
                                $("#ballard").click(function() {
                                    $('.bhourday').css({"color":"white"});
                                    });
                            });