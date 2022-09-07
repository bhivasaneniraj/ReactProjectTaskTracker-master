create table emp1 as select * from emp;
create table emp2 as select ename,sal,hiredate from emp;

drop table emp2;

create table emp2 as select * from emp where 'X'='Y';

select * from emp2;

drop table emp2;



rename emp1 to employee1;

rollback;

alter table employee1 rename column ename to employeename;


alter table employee1 drop column job;

alter table employee1 drop (empno,employeename,sal);


drop table employee1;



select * from employee1;

select * from recyclebin;

show recyclebin;

flashback table employee1 to before drop rename to emp1;



comment on table employee1 is 'employee details with salaries';



comment on column employee1.hiredate is 'hiredate details';

select * from emp;

create table emp1(
empno number(20) not null,
ename varchar2(20) not null,
job varchar2 (20) not null,
mgr number(10,4),
hiredate date not null,
sal number(30) not null,
comm number(19),
deptno number(20) not null);


insert into emp1 select * from emp;



select * from emp1;



 select sal * 3 from emp where sal = 1250;



update emp1 set ename = 'aaa';

update emp1 set ename = 'aaa',sal =2000;


update emp1 set ename ='aaa' where empno = 7839;



