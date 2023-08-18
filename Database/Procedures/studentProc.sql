use School;
go

CREATE OR ALTER PROC uspGetStudents AS
BEGIN
    SELECT id, name, class, fees FROM student
    WHERE is_deleted=0
END;
GO

CREATE OR ALTER PROC uspGetStudent(@id VARCHAR(200)) AS
BEGIN
    SELECT id, name, class, fees FROM student
    WHERE id = @id AND is_deleted = 0
END;
GO

CREATE OR ALTER PROC uspCreateStudent(@id VARCHAR(200),@name VARCHAR(200), @class VARCHAR(200), @fees FLOAT) AS
BEGIN
    INSERT INTO student (id, name, class, fees)
    VALUES(@id,@name, @class, @fees)
END;
GO


CREATE OR ALTER PROC uspUpdateFees(@id VARCHAR(200), @fees FLOAT) AS
BEGIN
    UPDATE student SET fees = @fees
    WHERE id = @id AND is_deleted=0
END;
GO


CREATE OR ALTER PROC uspDeleteStudent(@id VARCHAR(200)) AS
BEGIN
    UPDATE student SET  is_deleted =1
    WHERE id = @id AND is_deleted=0
END;
GO

USE School;
go
INSERT INTO student(id, name, class, fees)
VALUES("AWA", "SAMUEL", "4 KIL", 20000.0)


SELECT * FROM student