unit FigureForm;

interface

uses
  Winapi.Windows,
  Winapi.Messages,
  System.SysUtils,
  System.Variants,
  System.Classes,
  Vcl.Graphics,
  Vcl.Controls,
  Vcl.Forms,
  Vcl.Dialogs,
  Vcl.StdCtrls,
  Vcl.ExtCtrls,
  Vcl.DBCtrls;

type
  TForm1 = class(TForm)
    GroupBoxParams: TGroupBox;
    DBRadioGroup1: TDBRadioGroup;
    RBtnCil: TRadioButton;
    RBtnPar: TRadioButton;
    RBtnPri: TRadioButton;
    EditParamsOsnov: TEdit;
    EditParamsHeight: TEdit;
    CBoxMaterial: TComboBox;
    GroupBoxDeform: TGroupBox;
    LabelDeformOsnovData: TLabel;
    LabelDeformHeightData: TLabel;
    BtnCalk: TButton;
    BtnExit: TButton;
    GroupBoxVisualization: TGroupBox;
    Image1: TImage;
    LabelParamsOsnov: TLabel;
    LabelParamsHeight: TLabel;
    LabelParamsMaterial: TLabel;
    LabelDeformOsnov: TLabel;
    LabelDeformHeight: TLabel;
    procedure FormCreate(Sender: TObject);
    procedure BtnCalkClick(Sender: TObject);
    procedure BtnExitClick(Sender: TObject);
    procedure EditZagotClick(Sender: TObject);
    procedure FormActivate(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Form1: TForm1;

implementation

{$R *.dfm}

Type
  TMaterial = (Cu, Al, Fe, Ni); // Материалы заготовок

  TZagot = class // Абстрактная заготовка
    Structure: TMaterial;
    SHeight, DHeight, SOsnov, DOsnov: real;
    Constructor Create;
    Procedure Deform; virtual;
    Procedure Show(Heig, Osn: real; Zc: TColor); virtual; abstract;
    Procedure Draw;
  End;

  TCil = class(TZagot) // Цилиндр
    constructor Сreate;
    procedure Deform; override;
    procedure Show(Heig, Osn: real; Zc: TColor); override;
  end;

  TPar = class(TZagot) // Параллелепипед
    constructor Сreate;
    procedure Deform; override;
    procedure Show(Heig, Osn: real; Zc: TColor); override;
  end;

  TPri = class(TZagot) // Призма
    constructor Create;
    procedure Deform; override;
    procedure Show(Heig, Osn: real; Zc: TColor); override;
  end;

var
  m: real;

{$REGION 'Абстрактная заготовка'}

constructor TZagot.Create; // Создание абстрактной заготовки
begin
  inherited;
  SHeight := 30;
  DHeight := 1;
  SOsnov := 10;
  DOsnov := 1;
  Structure := Cu;
end;

procedure TZagot.Deform; // Деформация абстрактной заготовки
var
  k: real;
begin
  k := 1;
  case Structure of
    Cu:
      k := 2;
    Al:
      k := 3;
    Fe:
      k := 4;
    Ni:
      k := 5;
  end;
  DHeight := SHeight - SHeight / k;
end;

procedure TZagot.Draw; // Отрисовка заготовки
begin
  with Form1.Image1.Canvas do
    Fillrect(ClipRect);
  m := SHeight;
  if SOsnov > m then
    m := SOsnov;
  if DHeight > m then
    m := DHeight;
  if DOsnov > m then
    m := DOsnov;
  m := 250 / m;

  Show(m * DHeight, m * DOsnov, clRed); // После деформации
  Show(m * SHeight, m * SOsnov, clBlack); // До деформации
end;

{$ENDREGION}
{$REGION 'Цилиндр'}

constructor TCil.Сreate; // Создание цилиндра
begin
  inherited;
end;

procedure TCil.Deform; // Деформация цилиндр
begin
  inherited;
  DOsnov := 2 * Sqrt(SHeight * Sqr(SOsnov * 0.5) / DHeight);
end;

procedure TCil.Show(Heig: real; Osn: real; Zc: TColor); // Отрисовка цилиндра
begin
  with Form1.Image1.Canvas do
  begin
    Pen.color := Zc;
    Pen.Style := psSolid;

    // Рисуем верхние основание
    Ellipse(160 - Round(Osn * 0.5), 10 + Round(m * SHeight - Heig), 160 + Round(Osn * 0.5),
      10 + Round(m * SHeight - Heig + Osn * 0.3));

    // Рисуем нижние основание
    Arc(160 - Round(Osn * 0.5), 10 + Round(m * SHeight), 160 + Round(Osn * 0.5),
      10 + Round(m * SHeight + Osn * 0.3), 160 - Round(Osn * 0.5),
      10 + Round(m * SHeight + Osn * 0.15), 160 + Round(Osn * 0.5),
      10 + Round(m * SHeight + Osn * 0.15));

    // Рисуем боковые грани
    MoveTo(160 - Round(Osn * 0.5), 10 + Round(m * SHeight - Heig + Osn * 0.15));
    LineTo(160 - Round(Osn * 0.5), 10 + Round(m * SHeight + Osn * 0.15));
    MoveTo(160 + Round(Osn * 0.5), 10 + Round(m * SHeight - Heig + Osn * 0.15));
    LineTo(160 + Round(Osn * 0.5), 10 + Round(m * SHeight + Osn * 0.15));
  end;
end;

{$ENDREGION}
{$REGION 'Параллелепипед'}

constructor TPar.Сreate; // Создание параллелепипеда
begin
  inherited;
end;

procedure TPar.Deform; // Деформация параллелепипеда
begin
  inherited;
  DOsnov := Sqrt(SHeight * Sqr(SOsnov) / DHeight);
end;

procedure TPar.Show(Heig: real; Osn: real; Zc: TColor); // Отрисовка параллелепипеда
begin
  with Form1.Image1.Canvas do
  begin
    Pen.color := Zc;
    Pen.Style := psSolid;

    // Рисуем верхние основание
    Polygon([point(220 - Round(Osn * 0.5), 10 + Round(m * SHeight - Heig)),
      point(220 + Round(Osn * 0.5), 10 + Round(m * SHeight - Heig)), point(220 + Round(Osn * 0.2),
      10 + Round(m * SHeight - Heig + Osn * 0.3)), point(220 - Round(Osn * 0.8),
      10 + Round(m * SHeight - Heig + Osn * 0.3))]);

    // Рисуем нижние основание и боковые грани
    MoveTo(220 - Round(Osn * 0.8), 10 + Round(m * SHeight - Heig + Osn * 0.3));
    LineTo(220 - Round(Osn * 0.8), 10 + Round(m * SHeight + Osn * 0.3));
    LineTo(220 + Round(Osn * 0.2), 10 + Round(m * SHeight + Osn * 0.3));
    LineTo(220 + Round(Osn * 0.5), 10 + Round(m * SHeight));
    LineTo(220 + Round(Osn * 0.5), 10 + Round(m * SHeight - Heig));
    MoveTo(220 + Round(Osn * 0.2), 10 + Round(m * SHeight - Heig + Osn * 0.3));
    LineTo(220 + Round(Osn * 0.2), 10 + Round(m * SHeight + Osn * 0.3));
  end;
end;

{$ENDREGION}
{$REGION 'Призма'}

constructor TPri.Create; // Создание призмы
begin
  inherited;
end;

procedure TPri.Deform; // Деформация призмы
begin
  inherited;
  DOsnov := Sqrt(SHeight * Sqr(SOsnov) / DHeight);
end;

procedure TPri.Show(Heig: real; Osn: real; Zc: TColor); // Отрисовка призмы
begin
  with Form1.Image1.Canvas do
  begin
    Pen.color := Zc;
    Pen.Style := psSolid;

    // Рисуем верхние основание
    Polygon([point(220 + Round(Osn * 0.5), 10 + Round(m * SHeight - Heig)),
      point(220 - Round(Osn * 0.2), 10 + Round(m * SHeight - Heig + Osn * 0.3)),
      point(220 + Round(Osn * 0.8), 10 + Round(m * SHeight - Heig + Osn * 0.3))]);

    // Рисуем нижние основание и боковые грани
    MoveTo(220 - Round(Osn * 0.2), 10 + Round(m * SHeight - Heig + Osn * 0.3));
    LineTo(220 - Round(Osn * 0.2), 10 + Round(m * SHeight + Osn * 0.3));
    LineTo(220 + Round(Osn * 0.8), 10 + Round(m * SHeight + Osn * 0.3));
    LineTo(220 + Round(Osn * 0.8), 10 + Round(m * SHeight - Heig + Osn * 0.3));

    // Рисуем внутренние грани
    Pen.Style := psDot;

    MoveTo(220 + Round(Osn * 0.5), 10 + Round(m * SHeight + Osn * 0.005));
    LineTo(220 + Round(Osn * 0.5), 10 + Round(m * SHeight - Heig + Osn * 0.005));

    MoveTo(220 + Round(Osn * 0.8), 10 + Round(m * SHeight + Osn * 0.3));
    LineTo(220 + Round(Osn * 0.5), 10 + Round(m * SHeight + Osn * 0.005));

    MoveTo(220 - Round(Osn * 0.2), 10 + Round(m * SHeight + Osn * 0.3));
    LineTo(220 + Round(Osn * 0.5), 10 + Round(m * SHeight + Osn * 0.005));

  end;
end;

{$ENDREGION}

procedure TForm1.BtnCalkClick(Sender: TObject); // Процедура расчета
begin
  var
    MyZagot: TZagot;
  begin
    if RBtnCil.Checked then
      MyZagot := TCil.Create
    else if RBtnPar.Checked then
      MyZagot := TPar.Create
    else
      MyZagot := TPri.Create;

    with MyZagot do
    begin
      SOsnov := StrToFloat(EditParamsOsnov.Text);
      SHeight := StrToFloat(EditParamsHeight.Text);
      Structure := Cu;
      inc(Structure, CBoxMaterial.ItemIndex);
      Deform;
      Draw;
      LabelDeformOsnovData.Caption := FloatToStrF(DOsnov, ffFixed, 10, 2) + ' см';
      LabelDeformHeightData.Caption := FloatToStrF(DHeight, ffFixed, 10, 2) + ' см';
    end;
  end;
end;

procedure TForm1.BtnExitClick(Sender: TObject); // Процедура закрытия
begin
  close();
end;

procedure TForm1.FormActivate(Sender: TObject);
begin
  Form1.Image1.Canvas.Rectangle(0, 0, Image1.Width, Image1.Height);
end;

procedure TForm1.FormCreate(Sender: TObject);
begin
  CBoxMaterial.ItemIndex := 0;
end;

procedure TForm1.EditZagotClick(Sender: TObject);
var
  zn: string;
begin
  if RBtnCil.Checked then
    zn := 'Диаметр'
  else
    zn := 'Сторона';

  LabelParamsOsnov.Caption := zn + ' (см)';
  LabelDeformOsnov.Caption := zn + ' =';
end;

end.
