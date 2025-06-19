package com.week1.singletonpattern;

public class Test {

	public static void main(String[] args) {
		Logger log1=Logger.getInstance();
		
		log1.display("log1");
		
		Logger log2=Logger.getInstance();
		
		log2.display("log2");

	}

}
