package com.week1.singletonpattern;

class Logger {
	private static Logger log;
	
	private Logger() {
		System.out.println("Instance created");
	}
	
	public static Logger getInstance() {
		if(log==null)
			log=new Logger();
		return log;
		
	}
	
	public void display(String s1) {
		System.out.println("This is Logger class Single object for "+s1+" Instance");
	}

}
